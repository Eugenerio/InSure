/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Label,
  Input,
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/";
import { formScheme } from "@/lib/schemas";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import {WrapperBuilder} from "@redstone-finance/evm-connector";
import {insuranceAbi, insuranceAddress} from "@/lib/wagmi/contract/abi";
import {Contract} from "ethers";
import {useAccount, useSwitchChain} from "wagmi";
import {useState} from "react";
import {getTransactionReceipt, writeContract} from "@wagmi/core";
import {wagmiConfig} from "@/lib/wagmi/config";
import {erc20Abi} from "viem";
import {TransactionModal} from "@/components/molecules/transaction";
import insuranceAbiJSON from "@/lib/wagmin/contract/abi.json";

const OP_SEPOLIA = 11155420;
const YEAR_DURATION = 360;
const SECONDS_IN_DAY  = 86400;

export const SubmitForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string>("");

  const [ status, setStatus ] = useState<"loading" | "error" | "success" | "idle">("idle");

  const account = useAccount();

  const { switchChainAsync } = useSwitchChain();

  const formik = useFormik({
    validationSchema: formScheme,
    initialValues: {
      protectedAmount: 1,
      protectedWallet: account.address || "",
      coverageDuration: 1,
    },
    validateOnChange: true,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: async (value) => {
      try {
        setOpen(true);
        setStatus("loading")

        const contract = new Contract(insuranceAddress, insuranceAbiJSON) as any;

        const wrappedContract = WrapperBuilder.wrap(contract).usingSimpleNumericMock({
          mockSignersCount: 10,
          dataPoints: [
            { dataFeedId: "USDT", value: 1 },
          ],
        });
        console.log("Wrapped Contract", wrappedContract)

        const insuredAmount = value.protectedAmount;
        const duration = value.protectedAmount * SECONDS_IN_DAY;
        const policyPriceAPR = 5;

        await switchChainAsync({
          chainId: OP_SEPOLIA,
        });

        const insuranceFee = (insuredAmount * policyPriceAPR * duration) / (YEAR_DURATION * 100);

        await writeContract(wagmiConfig, {
          abi: erc20Abi,
          address: "0x478b538abc23e414a1007f715f95e20b85e728a3",
          functionName: "approve",
          args: [insuranceAddress, BigInt(insuranceFee) ],
          chainId: OP_SEPOLIA
        })

        const tx = await wrappedContract.createPolicy(value.protectedAmount, value.coverageDuration);
        setTxHash(tx);

        const receipt = await getTransactionReceipt(wagmiConfig, {
          hash: tx as `0x${string}`,
          chainId: OP_SEPOLIA,
        });
        setStatus("success")

        if (receipt.status == "reverted") {
          toast("Reverted Transaction", { type: "error" });
          setStatus("error")
        }
      } catch (e: any) {
        console.log(e);
        setOpen(false);
        toast(e.message, { type: "error" });
      }
    },
  });

  const isSubmitButtonDisabled =
    !!formik.errors.protectedWallet ||
    !!formik.errors.protectedAmount ||
    !!formik.errors.coverageDuration;

  return (
    <form onSubmit={formik.handleSubmit} id={"form"}>
      <div className="w-full h-full mt-10 flex justify-center items-center">
        <div className="flex w-full">
          <div className="flex flex-col w-[55%] p-6 bg-white shadow-md rounded-lg">
            <Label className="text-3xl font-bold mb-8 w-full text-center">
              Apply for USDC Depeg Protection
            </Label>
            <div className="flex justify-between items-center w-full mt-5">
              <div className="flex flex-col w-full">
                <Label htmlFor="protectedWallet" className="text-lg">
                  Protected Wallet
                </Label>
                <Input
                  value={formik.values.protectedWallet}
                  id="protectedWallet"
                  onChange={formik.handleChange}
                  type="text"
                  name="protectedWallet"
                  disabled
                  className="mt-2 rounded-md border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                />
                {formik.errors.protectedWallet && (
                  <span className="text-sm font-medium text-red-600 mt-1">
                    {formik.errors.protectedWallet}
                  </span>
                )}
              </div>
              <div className="flex flex-col ml-5 w-full">
                <Label htmlFor="protectedAmount" className="text-lg">
                  Protected Amount
                </Label>
                <Input
                  value={formik.values.protectedAmount}
                  id="protectedAmount"
                  onChange={formik.handleChange}
                  type="number"
                  name="protectedAmount"
                  className="mt-2 rounded-md border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                />
                {formik.errors.protectedAmount && (
                  <span className="text-sm font-medium text-red-600 mt-1">
                    {formik.errors.protectedAmount}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
              <div className="flex flex-col w-full">
                <Label htmlFor="coverageDuration" className="text-lg">
                  Coverage Duration
                </Label>
                <Input
                  value={formik.values.coverageDuration}
                  id="coverageDuration"
                  onChange={formik.handleChange}
                  type="number"
                  className="mt-2 rounded-md border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                  name="coverageDuration"
                />
                {formik.errors.coverageDuration && (
                  <span className="text-sm font-medium text-red-600 mt-1">
                    {formik.errors.coverageDuration}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full mt-5 flex justify-center">
              <Button
                type="submit"
                variant="default"
                className="w-[50%] text-xl py-5"
                disabled={isSubmitButtonDisabled}
              >
                Submit
              </Button>
            </div>
          </div>

          <div className="mx-8 w-[2px] bg-gray-300"></div>

          <div className="w-[50%]">
            <HowItWorks />
          </div>
        </div>
      </div>
      <TransactionModal
        open={open}
        setOpen={setOpen}
        txHash={txHash}
        status={status}
      />

    </form>
  );
};

const HowItWorks = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1" className="w-full mt-5">
      <AccordionTrigger className="w-full">
        How does the protection work and how much will I get?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col w-full">
        <span>
          If the price of USDC drops below USD 0.995 and does not recover above
          0.999 within 24 hours, you are eligable for a payout in USDT.
        </span>
        <span className="mt-5">
          The payout is based on the price of USDC after 24 hours and will cover
          your loss at that time. Payouts are capped at USDC 0.80 (20% depeg).
          If at the time of depeg the wallet contains less USDC than the
          protected amount, the payout will be limited proportionally. After the
          depeg event you have 7 days to claim the payout. A claim can be issued
          by clicking on the <i>Claim</i> action in the <i>Policies</i> section
          of the application.
        </span>
        <span className="mt-5">
          <strong>Example</strong>: If you protect USDC 1 000,00 from your
          wallet and the price of USDC drops and is at USD 0.9 24 hours after
          dropping below USD 0.995, you will receive a{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="underline">
                payout of USDT 100,00
              </TooltipTrigger>
              <TooltipContent>USDT 1 000,00 * (1 - 0.9)</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          . The maximum payout is USDT 200,00.
        </span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-w" className="w-full mt-5">
      <AccordionTrigger className="w-full">
        What is the risk bundles?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col w-full">
        Risk Bundles refer to structured investment packages, each containing
        specific terms regarding interest rates, amounts, and durations. Please
        choose from the available risk bundles below:
        <div className="flex flex-col w-full items-center text-xs mt-5">
          <div className="w-full flex justify-between items-center border-b">
            <TableItem value={"ID"} />
            <TableItem value={"Name"} />
            <TableItem value={"APR"} />
            <TableItem value={"Min / Max Amount"} />
            <TableItem value={"Duration"} />
          </div>
          <div className="w-full flex justify-between items-center py-2">
            <TableItem value={"1"} />
            <TableItem value={"High-Risk Bundle"} />
            <TableItem value={"8.5%"} />
            <TableItem value={"10K / 100K USDC"} />
            <TableItem value={"6 months"} />
          </div>
          <div className="w-full flex justify-between items-center py-2">
            <TableItem value={"2"} />
            <TableItem value={"Moderate Bundle"} />
            <TableItem value={"5.2%"} />
            <TableItem value={"5K / 50K USDC"} />
            <TableItem value={"4 months"} />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const TableItem = ({ value }: { value: string }) => (
  <span className="text-left flex-grow p-2">{value}</span>
);
