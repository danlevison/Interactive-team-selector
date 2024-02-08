type OverlayProps = {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Overlay({
  isExpanded,
  setIsExpanded,
  children,
}: OverlayProps) {
  return isExpanded ? (
    <>
      <div onClick={() => setIsExpanded(false)} className="overlay-backdrop" />
      {children}
    </>
  ) : null;
}
