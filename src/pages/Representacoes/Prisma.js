import React from 'react';
import Navigation from "../../components/Navbar/Navigation";
import BeplastHero from "../../components/Hero/RepresentacoesHero";
import PrismaCard from "../../components/RepresentCards/PrismaCard";
import "react-bulma-components/lib/components/navbar";
import "../../sass/main.scss";

function Prisma() {
    return (
            <>
        <Navigation />
        <BeplastHero />
        <PrismaCard />
            </>
    )
}

export default Prisma;