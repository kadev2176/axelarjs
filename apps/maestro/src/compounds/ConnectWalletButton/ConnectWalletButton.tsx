import { Button, type ButtonProps } from "@axelarjs/ui";
import { forwardRef } from "react";

import { useWeb3Modal } from "@web3modal/react";
import { useConnect } from "wagmi";

import { IS_E2E_TEST } from "~/config/wagmi";

type Props = ButtonProps;

const ConnectWalletButton = forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const { open } = useWeb3Modal();
    const { connect } = useConnect();

    const handleConnect = async () => {
      if (IS_E2E_TEST) {
        connect({
          chainId: 1,
        });
      } else {
        open();
      }
    };

    return (
      <Button
        data-test-id="connect-button"
        {...props}
        onClick={handleConnect}
        ref={ref}
      />
    );
  }
);

ConnectWalletButton.displayName = "ConnectWalletButton";

ConnectWalletButton.defaultProps = {
  size: "sm",
  color: "primary",
  children: "Connect Wallet",
};

export default ConnectWalletButton;
