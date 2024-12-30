/* Types */
import {SkillsSectionData} from "../../../types/SkillsSectionData.ts";
import {useTranslation} from "react-i18next";

const SkillsSectionGrid = ({cat1, cat1_desc, cat2, cat2_desc, cat3, cat3_desc, cat4, cat4_desc}: SkillsSectionData) => {
    const {t} = useTranslation();

    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-8 text-center w-[44rem] h-[44rem] relative">
            <div className="relative p-4 flex flex-col justify-center items-center -translate-y-8">
                <div className="absolute inset-0 bg-[#1a1a1a] opacity-50 "></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="#00FFEE"
                     className="z-50">
                    <path
                        d="M12.008 0c-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 3.783 0 9.992-1.001 9.992-4.361v-15.278c0-3.361-5.965-4.361-9.992-4.361zm-8.008 12.148c.351.222.734.411 1.131.586l-.38 2.851c-.471-.316-.751-.676-.751-1.072v-2.365zm12.209 4.531l.431-3.225c.435-.099.857-.215 1.267-.351l-.434 3.26c-.399.12-.824.225-1.264.316zm-1.375.236c-.42.058-.836.104-1.24.138l.428-3.207c.416-.033.831-.077 1.241-.135l-.429 3.204zm-2.587.207l-.239.004c-.318 0-.648-.012-.982-.029l.424-3.181.559.011.665-.013-.427 3.208zm-2.549-.134c-.404-.045-.806-.102-1.2-.169l.411-3.087c.4.053.803.092 1.207.123l-.418 3.133zm-2.509-.442c-.42-.105-.815-.224-1.177-.354l.4-2.987c.385.116.778.22 1.184.305l-.407 3.036zm12.811 2.84c0 1.751-5.104 2.614-7.992 2.614-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.04zm0-4.873c0 .507-.437.937-1.115 1.296l.438-3.286c.232-.118.463-.238.678-.375v2.365zm0-5.199c0 1.753-5.131 2.614-7.992 2.614-3.426 0-8.008-1.006-8.008-2.614v-2.371c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.371zm-7.992-2.591c-3.412 0-8.008-.906-8.008-2.362 0-1.584 4.812-2.361 8.008-2.361 3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.362-7.992 2.362z"/>
                </svg>
                <span className="mt-4 font-semibold z-10">{t(cat4)}</span>
                <span className="mt-2 text-sm z-10 text-gray-300">{t(cat4_desc)}</span>
            </div>
            <div className="relative p-4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-text to-transparent opacity-10"></div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="128" height="128" viewBox="0,0,256,256">
                    <g fill="#00ffee" stroke="none" stroke-linecap="butt"
                       stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                       font-family="none" font-weight="none" font-size="none" text-anchor="none">
                        <g transform="scale(5.12,5.12)">
                            <path
                                d="M5,2c-1.64453,0 -3,1.35547 -3,3v30c0,1.64453 1.35547,3 3,3h14v2h-9c-0.03125,0 -0.0625,0 -0.09375,0c-0.26953,0.02734 -0.51953,0.16016 -0.6875,0.375l-5,6c-0.24219,0.30078 -0.28906,0.71094 -0.12109,1.05859c0.16797,0.34766 0.51953,0.56641 0.90234,0.56641h40c0.38281,0 0.73438,-0.21875 0.90234,-0.56641c0.16797,-0.34766 0.12109,-0.75781 -0.12109,-1.05859l-5,-6c-0.19141,-0.23828 -0.47656,-0.375 -0.78125,-0.375h-9v-2h14c1.64453,0 3,-1.35547 3,-3v-30c0,-1.64453 -1.35547,-3 -3,-3zM5,4h40c0.55469,0 1,0.44531 1,1v30c0,0.55469 -0.44531,1 -1,1h-40c-0.55469,0 -1,-0.44531 -1,-1v-30c0,-0.55469 0.44531,-1 1,-1zM6,6v28h38v-28zM8,8h34v24h-34zM19.28125,11.28125l-8,8l-0.6875,0.71875l0.6875,0.71875l8,8l1.4375,-1.4375l-7.28125,-7.28125l7.28125,-7.28125zM30.71875,11.28125l-1.4375,1.4375l7.28125,7.28125l-7.28125,7.28125l1.4375,1.4375l8,-8l0.6875,-0.71875l-0.6875,-0.71875zM21,38h8v4h-8zM10.46875,42h8.53125v2h12v-2h8.53125l3.34375,4h-35.75z"></path>
                        </g>
                    </g>
                </svg>
                <span className="mt-4 font-semibold">{t(cat1)}</span>
                <span className="mt-2 text-sm text-gray-300 ">{t(cat1_desc)}</span>
            </div>
            <div className="relative p-4 flex flex-col justify-center items-center -translate-y-8">
                <div className="absolute inset-0 bg-gradient-to-t from-text to-transparent opacity-10"></div>
                <svg className="z-50 text-[#00FFEE]" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                     width="148" height="148"
                     stroke-miterlimit="2"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.818 5.865 2.635 1.622-2.641 1.645c-.207.146-.318.378-.318.613 0 .601.682.966 1.182.613l3.511-2.257c.199-.141.318-.369.318-.614 0-.244-.119-.472-.318-.613l-3.505-2.235c-.498-.35-1.182.009-1.182.612 0 .236.111.468.318.614zm9.678 3.873c0-.414-.336-.75-.75-.75h-3.5c-.413 0-.75.336-.75.75s.337.75.75.75h3.5c.414 0 .75-.336.75-.75z"
                        fill="#00FFEE"/>
                </svg>
                <span className="mt-4 font-semibold">{t(cat2)}</span>
                <span className="mt-2 text-sm text-gray-300 ">{t(cat2_desc)}</span>
            </div>
            <div className="relative p-4 flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-[#1a1a1a] opacity-50"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 24 24" fill="#00FFEE"
                     className="z-50">
                    <path
                        d="M13 12v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201zm5.362-12.201c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/>
                </svg>
                <span className="mt-4 font-semibold z-10">{t(cat3)}</span>
                <span className="mt-2 text-sm z-10 text-gray-300">{t(cat3_desc)}</span>
            </div>
        </div>
    );
};

export default SkillsSectionGrid;