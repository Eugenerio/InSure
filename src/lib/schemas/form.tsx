import * as Yup from "yup";

const evm_wallet_regex = /^0x[a-fA-F0-9]{40}$/;

export const formScheme = Yup.object().shape({
  protectedAmount: Yup.number().required("Protected Amount is required"),
  protectedWallet: Yup.string()
    .matches(evm_wallet_regex, "Wallet address is not valid, must be 0x....")
    .required("Wallet address is required"),
  coverageDuration: Yup.number().min(1, "Minimum coverage duration days is 1"),
  coverageUntil: Yup.date().required("Coverage until is required"),
  premium: Yup.number()
    .min(1, "Minimum 1 token is required")
    .required("Premium token is required"),
});
