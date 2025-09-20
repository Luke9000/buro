const RedCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1503 1503"
      fill="current"
      stroke="current"
      xmlns="http://www.w3.org/2000/svg"
      className=" overflow-visible"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M751.011 1298.99C1053.65 1298.99 1298.99 1053.65 1298.99 751.011C1298.99 448.369 1053.65 203.03 751.011 203.03C448.369 203.03 203.03 448.369 203.03 751.011C203.03 1053.65 448.369 1298.99 751.011 1298.99ZM751.011 1502.02C1165.78 1502.02 1502.02 1165.78 1502.02 751.011C1502.02 336.239 1165.78 0 751.011 0C336.239 0 0 336.239 0 751.011C0 1165.78 336.239 1502.02 751.011 1502.02Z"
        fill="current"
      />
      <path
        d="M1104.43 751.014C1104.43 946.2 946.203 1104.43 751.016 1104.43C555.829 1104.43 397.599 946.2 397.599 751.014C397.599 555.827 555.829 397.597 751.016 397.597C946.203 397.597 1104.43 555.827 1104.43 751.014Z"
        fill="current"
      />
      <circle
        className="origin-center animate-fade-in-scale delay-0"
        opacity="0.2"
        cx="50%"
        cy="50%"
        r="677"
        stroke="current"
        fill="transparent"
        strokeWidth="35"
      />
      <circle
        className="origin-center animate-fade-in-scale delay-1000"
        opacity="1"
        cx="50%"
        cy="50%"
        r="677"
        stroke="current"
        fill="transparent"
        strokeWidth="35"
      />
      <circle
        className="origin-center animate-fade-in-scale delay-2000"
        opacity="0.1"
        cx="50%"
        cy="50%"
        r="677"
        stroke="current"
        fill="transparent"
        strokeWidth="35"
      />
    </svg>
  );
};

export default RedCircle;
