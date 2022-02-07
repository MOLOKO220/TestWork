import burgerBtn from "./img/burgerBtn.svg";
import lengBtn from "./img/lengBtn.svg";
import "./Header.scss";

function Header(props) {
  return (
    <header>
      <div className="lengw-btn">
        <img src={lengBtn} alt="button" />
        <a href="#">RU</a>
        <a href="#">UA</a>
      </div>
      <div className="logo">
        {/*увы и ах, линейный градиент сломался при переносе в реакт */}
        <a href="#">
          <svg
            width="84"
            height="46"
            viewBox="0 0 84 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lightGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#bebebe">
                  <animate
                    attributeName="stopСolor"
                    values="#bebebe; black"
                    dur="2s"
                    fill="freeze"
                    begin="2s"
                  />
                </stop>
                <stop offset="100%" stopColor="#bebebe">
                  <animate
                    attributeName="stopСЫolor"
                    values="#bebebe; black"
                    dur="2s"
                    fill="freeze"
                  />
                </stop>
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="url(#lightGradient)"
              d="M28.3268 6.12368L36.3353 4.76944V32.3073L28.3268 30.9529V6.12368ZM24.9096 2.70864V34.3682L39.7524 37.0767V0L24.9096 2.70864ZM68.3736 18.1975V21.6108H73.0156V30.9366H64.6053V6.12038H71.8047V11.1968H75.2203V2.7072H61.1898V34.3498H76.4311V18.1975H68.3736ZM10.7458 28.088L10.7646 28.1724C12.6408 19.6456 14.5108 11.1529 16.3715 2.70721H21.4916V34.3496H18.0763V9.63353C18.0262 9.63353 12.391 34.3656 12.391 34.3656H9.10058C9.10058 34.3656 3.46537 9.63353 3.41551 9.63353V34.3496H0V2.70721H5.11998C6.98077 11.1529 8.85094 19.6456 10.7272 28.1724L10.7317 28.1519L10.738 28.1231L10.7458 28.088ZM54.0646 6.12045H43.5765V2.70728H57.7676V6.12045L47.2792 30.9365H57.7676V34.3499H43.5765V30.9365L54.0646 6.12045ZM83.2685 34.35H79.8529V2.7074H83.2685V34.35ZM30.1003 45.9999V45.4751H27.3907V43.8936H29.4916V43.3689H27.3907V41.9542H29.9978V41.4293H26.8141V45.9999H30.1003ZM32.781 41.4292H33.3897L34.6386 45.4108H34.9591L36.208 41.4292H36.8039L35.3431 45.9999H34.2414L32.781 41.4292ZM43.0464 45.9999V45.4751H40.3368V43.8936H42.4382V43.3689H40.3368V41.9542H42.9442V41.4293H39.7605V45.9999H43.0464ZM49.9232 41.4292V45.9999H49.0136L46.8871 42.1782H46.7458V45.9999H46.1824V41.4292H47.092L49.2185 45.251H49.3594V41.4292H49.9232ZM54.9555 41.9416H56.4545V41.4293H52.8672V41.9416H54.3786V46H54.9555V41.9416Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      <div className="header__burgerBtn-wrapp">
        <img src={burgerBtn} className="burder-btn" alt="show menu" />
      </div>
    </header>
  );
}

export default Header;
