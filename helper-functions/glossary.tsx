import NextJsSvg from "../public/svg/technologies/nextjs";
import ReactSvg from "../public/svg/technologies/react";
import NodeJsSvg from "../public/svg/technologies/nodejs";
import MongoDbSVG from "../public/svg/technologies/mongodb";
import JavaScriptSvg from "../public/svg/technologies/javascript";
import TypeScriptSvg from "../public/svg/technologies/typescript";
import HtmlSvg from "../public/svg/technologies/html";
import CssSvg from "../public/svg/technologies/css";
import MaterialUiSvg from "../public/svg/technologies/materialui";
import RestApiSvg from "../public/svg/technologies/restapi";
import GraphQlSvg from "../public/svg/technologies/graphql";

const glossary = {
    nextjs: {
        logo: NextJsSvg,
        description: "nextjs description",
    },
    react: {
        logo: ReactSvg,
        description: "react description",
    },
    nodejs: {
        logo: NodeJsSvg,
        description: "nodejs description",
    },
    mongodb: {
        logo: MongoDbSVG,
        description: "mongodb description",
    },
    javascript: {
        logo: JavaScriptSvg,
        description: "javascript description",
    },
    typescript: {
        logo: TypeScriptSvg,
        description: "typescript description",
    },
    html: {
        logo: HtmlSvg,
        description: "html description",
    },
    css: {
        logo: CssSvg,
        description: "css description",
    },
    materialui: {
        logo: MaterialUiSvg,
        description: 'material ui description'
    },
    restapi: {
        logo: RestApiSvg,
        description: 'rest api description'
    },
    graphql: {
        logo: GraphQlSvg,
        description: 'graphql description'
    }
};

export default glossary;
