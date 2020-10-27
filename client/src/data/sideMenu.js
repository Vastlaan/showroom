import { MdFolder, MdGroup, MdAccessTime, MdPhoto } from "react-icons/md";

export const MenuProps = {
    header: "Brand Name",
    subheader: "maybe some description",
    categories: [
        {
            id: 1,
            header: "",
            items: [
                {
                    id: 1,
                    name: "Files",
                    icon: <MdFolder />,
                    link: "/article-1",
                },
                {
                    id: 2,
                    name: "Groups",
                    icon: <MdGroup />,
                    link: "/article-2",
                },
                {
                    id: 3,
                    name: "Recent",
                    icon: <MdAccessTime />,
                    link: "/article-2",
                },
                {
                    id: 4,
                    name: "Photos",
                    icon: <MdPhoto />,
                    link: "/article-1",
                },
            ],
        },
        {
            id: 2,
            header: "Administration",
            items: [
                {
                    id: 1,
                    name: "Settings",
                    icon: <MdFolder />,
                    sub: [
                        {
                            id: 1,
                            name: "Time",
                            link: "/article-1",
                        },
                        {
                            id: 2,
                            name: "Date",
                            link: "/article-2",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Credentials",
                    icon: <MdGroup />,
                    sub: [
                        {
                            id: 1,
                            name: "Time",
                            link: "/article-1",
                        },
                        {
                            id: 2,
                            name: "Date",
                            link: "/article-2",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Auto",
                    icon: <MdAccessTime />,
                    link: "/article-1",
                },
            ],
        },
        {
            id: 3,
            header: "Activity",
            items: [
                {
                    id: 1,
                    name: "Log",
                    icon: <MdFolder />,
                    link: "/article-1",
                },
                {
                    id: 2,
                    name: "Likes",
                    icon: <MdGroup />,
                    link: "/article-2",
                },
                {
                    id: 3,
                    name: "Subscriptions",
                    icon: <MdAccessTime />,
                    link: "/article-1",
                },
            ],
        },
    ],
};
