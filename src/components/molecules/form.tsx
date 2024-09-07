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

export const SubmitForm = () => {
  const formik = useFormik({
    validationSchema: formScheme,
    initialValues: {
      protectedAmount: 1,
      protectedWallet: "",
      coverageDuration: 1,
      coverageUntil: new Date().toISOString().split("T")[0],
      premium: 1,
    },
    validateOnChange: true,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: async (value) => {
      try {
        console.log("Values", value);
      } catch (e: any) {
        console.log(e);
        toast(e.message, { type: "error" });
      }
    },
  });

  const isSubmitButtonDisabled =
    !!formik.errors.protectedWallet ||
    !!formik.errors.protectedAmount ||
    !!formik.errors.premium ||
    !!formik.errors.coverageUntil ||
    !!formik.errors.coverageDuration;

  return (
    <form onSubmit={formik.handleSubmit} id={"form"}>
      <div className="w-full h-full mt-10 flex justify-center items-center">
        {/* Two columns: Form on the left and HowItWorks on the right */}
        <div className="flex w-full">
          {/* Left Column - Form */}
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
              <div className="flex flex-col ml-5 w-full">
                <Label htmlFor="coverageUntil" className="text-lg">
                  Coverage Until
                </Label>
                <Input
                  value={formik.values.coverageUntil}
                  id="coverageUntil"
                  onChange={formik.handleChange}
                  type="date"
                  className="mt-2 rounded-md border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                  name="coverageUntil"
                />
                {formik.errors.coverageUntil && (
                  <span className="text-sm font-medium text-red-600 mt-1">
                    {formik.errors.coverageUntil}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full mt-5">
              <Label htmlFor="premium" className="text-lg">
                Premium
              </Label>
              <Input
                value={formik.values.premium}
                id="premium"
                onChange={formik.handleChange}
                type="number"
                className="mt-2 rounded-md border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
                name="premium"
              />
              {formik.errors.premium && (
                <span className="text-sm font-medium text-red-600 mt-1">
                  {formik.errors.premium}
                </span>
              )}
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
