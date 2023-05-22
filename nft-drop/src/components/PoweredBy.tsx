export const PoweredBy: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open("https://warlocks.netlify.app", "_blank");
      }}
      className="spacing-1 absolute bottom-4 right-4 flex cursor-pointer items-center"
    >
      🤖 Warlocks!
    </div>
  );
};
