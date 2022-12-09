import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface PrimaryButtonProps {
  name: string;
  onClick: () => void;
  className?: string;
  type?: "solid" | "outline" | "loading";
}

const PrimaryButton = ({
  className,
  type = "outline",
  name,
  onClick,
}: PrimaryButtonProps) => {
  const getBtnTypeClass = () => {
    if (type === "outline") {
      return "bg-transparent border-muted-secondary";
    }
    if (type === "solid") {
      return "bg-accent-primary border-accent-primary";
    }
  };

  return (
    <button
      onClick={() => onClick()}
      className={`
          ${getBtnTypeClass()}
          ${className}
          group
          relative
          cursor-pointer overflow-hidden
          rounded-full
          border
          p-6
          px-12
          text-['#fff']
          duration-400 
          ease-in-out
          hover:border-accent-tinted
      `}
    >
      <p
        className={`
          text-[#fff]
          duration-400
          ease-in-out 
          group-hover:-translate-y-full
          group-hover:opacity-0
        `}
      >
        {name}
      </p>
      <div
        className={`
        ${type === "loading" && "top-0 opacity-100"}
          absolute
          top-full
          left-0
          grid
          h-full
          w-full
          place-items-center
          bg-accent-tinted
          text-[#fff]
          opacity-0
          duration-400
          ease-in-out
          group-hover:top-0
          group-hover:opacity-100
        `}
      >
        <AiOutlineLoading3Quarters
          className={`
            ${type === "loading" && "opacity-100"}
            absolute
            m-auto
            animate-spin 
            text-3xl 
            text-[#fff] 
            opacity-0 
            duration-400
          `}
        />
        <span
          className={`
            duration-400
            ${type === "loading" && "opacity-0"}
          `}
        >
          {name}
        </span>
      </div>
    </button>
  );
};

export default PrimaryButton;
