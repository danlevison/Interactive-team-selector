type OverlayProps = {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Overlay({ setIsExpanded, children }: OverlayProps) {
  return (
    <>
      <div onClick={() => setIsExpanded(false)} className="overlay-backdrop" />
      {children}
    </>
  );
}
