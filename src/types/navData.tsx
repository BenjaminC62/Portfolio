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