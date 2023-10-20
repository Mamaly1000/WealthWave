import React from "react";
import { budgetAccountsType } from "../../../features/user-actions-slice/actions_slice";

const AccountItem = ({ acc, i }: { acc: budgetAccountsType; i: number }) => {
  return (
    <div style={{ background: acc.bgColor }} className="account">
      {acc.bgColor}
    </div>
  );
};

export default AccountItem;
