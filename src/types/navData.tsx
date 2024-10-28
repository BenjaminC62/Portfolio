export type dataItems = {
        id: number,
        title: string,
        link: string;
};

export type NavbarProps = {
    data: dataItems[],
    name: string,
    lastName: string,
    firstPage: string;
};