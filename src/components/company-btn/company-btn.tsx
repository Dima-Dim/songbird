import * as React from "react";
import classnames from "classnames";
import {companyBtnSC as SC} from "./sc";
import {helperClassNames} from "../../config";

interface CompanyBtnProps {
  isDisabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit",
  className?: string;
}

const CompanyBtn: React.FC<CompanyBtnProps> = (props) => {
  const {
    isDisabled = false,
    onClick,
    children,
    type = "button",
    className,
  } = props;

  const nextStepBtnClassNames = classnames(
    className,
    {
      [helperClassNames.ACTIVE]: !isDisabled,
    });

  return (
    <SC.BTN
      className={nextStepBtnClassNames}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </SC.BTN>
  );
};

export default CompanyBtn;
