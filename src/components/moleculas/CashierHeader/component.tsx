import { ProfileCard } from "../ProfileCard/component";
import fullLogo from "../../../assets/full-logo.svg";

export const CashierHeader = () => {
  return (
    <div className="flex items-center justify-between mb-10">
      <img className="w-full max-w-xs" src={fullLogo} />
      <ProfileCard />
    </div>
  );
};
