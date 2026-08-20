import { ImageResponse } from "next/og";

export const alt = "Koderea - AI Assurance & Validation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#fdfdfd",
          color: "#111418",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(114, 222, 210, 0.2), transparent 30%), radial-gradient(circle at 50% 58%, rgba(124, 111, 240, 0.14), transparent 42%)",
            display: "flex",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <svg
            width="132"
            height="148"
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8357 0.0357343C5.62639 -0.0494181 7.02478 0.382821 7.71984 0.793956C11.2385 2.89802 9.396 7.09887 10.3119 10.3441C10.8578 12.2785 13.1515 12.7804 14.2399 10.9958C15.3783 9.12543 15.1 6.90304 15.8093 4.88496C16.5306 2.83253 19.1805 2.09238 21.0341 3.06038C22.3219 3.73285 22.9359 4.86866 22.8671 6.3278C22.7906 8.4498 21.1745 9.31907 19.5534 10.2407C18.263 10.9743 15.2164 12.7257 14.5152 13.9772C12.6422 17.3209 18.1788 18.3763 20.2513 19.0923C20.7729 19.2725 21.3142 19.5569 21.8068 19.814C25.1781 21.9091 24.738 26.7705 20.8538 27.8271C20.5711 27.8835 20.2856 27.9246 19.9985 27.9499C18.8924 28.0441 17.8785 27.8785 16.9816 27.2033C16.6296 26.9351 16.1494 26.5541 15.9107 26.1751C14.3211 23.6506 15.1537 20.005 12.8386 17.8998C12.3684 17.5229 11.4691 17.1445 10.862 17.2309C7.66627 17.6905 8.39658 21.8053 6.78027 23.7241C6.03431 24.629 5.37125 24.9202 4.25635 25.0551C-0.639772 25.6168 -1.59588 18.9619 2.88222 17.566C3.55366 17.3566 4.21791 17.3832 4.89109 17.244C6.11923 16.9901 7.38789 16.7684 8.27374 15.8005C9.19933 14.7893 8.86865 13.4999 8.07209 12.5455C7.61288 11.9952 6.79462 11.5322 6.20251 11.1227C5.66705 10.8009 4.96837 10.5526 4.4121 10.2339C3.58612 9.76053 2.75196 9.32592 2.04052 8.68048C-0.13627 7.01857 -0.409593 3.77649 1.32458 1.69029C2.15746 0.688335 3.51629 0.140622 4.8357 0.0357343Z"
              fill="url(#koderea-social-gradient)"
            />
            <defs>
              <linearGradient
                id="koderea-social-gradient"
                x1="12.0368"
                y1="0.0249024"
                x2="12.0368"
                y2="27.9742"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#72DED2" />
                <stop offset="1" stopColor="#7C6FF0" />
              </linearGradient>
            </defs>
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: "-4px",
              lineHeight: 1,
              marginTop: 24,
            }}
          >
            Koderea
          </div>
          <div
            style={{
              color: "#515151",
              display: "flex",
              fontSize: 30,
              letterSpacing: "-0.5px",
              marginTop: 22,
            }}
          >
            AI Assurance &amp; Validation
          </div>
        </div>
      </div>
    ),
    size,
  );
}
