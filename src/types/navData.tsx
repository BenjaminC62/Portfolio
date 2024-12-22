/**
 * Different types of data that are used in the Navbar component
 */

export type dataItems = {
    id: number,
    title: string,
    link: string,
    image: string;
};

export type NavbarProps = {
    data: dataItems[],
    name: string,
    lastName: string,
    firstPage: string,
    homeIcon: string;
};

export type arrow = {
    upArrow: string,
}

export interface HeroSectionImageProps {
    imageBG?: string
}