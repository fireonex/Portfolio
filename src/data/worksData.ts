import SocialNetworkPic from "../images/SocialNetwork.png";
import ChatPic from "../images/chat.png";
import TodolistPic from "../images/todolist.png";
import {TabsStatusType} from "../layout/sections/works/tabMenu/TabMenu";

export const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "React"
    },
    {
        title: "SPA",
        status: "SPA"
    }
]

export const worksData = [
    {
        title: 'Social network',
        text: 'Social network (in development)',
        src: SocialNetworkPic,
        type: "React",
        domainLink: null,
        codeLink: 'https://github.com/fireonex/SocialNetwork',
        id: 1
    },
    {
        title: 'Online chat frontend',
        text: 'Online chat frontend on WebSocket',
        src: ChatPic,
        type: "SPA",
        domainLink: 'https://fireonex.github.io/chat-websocket-frontend/',
        codeLink: 'https://github.com/fireonex/chat-websocket-frontend.git',
        id: 2
    },
    {
        title: 'Online chat backend',
        text: 'Online chat backend on WebSocket & express',
        src: ChatPic,
        type: "landing",
        domainLink: null,
        codeLink: 'https://github.com/fireonex/chat-websocket-backend.git',
        id: 3
    },
    {
        title: 'Todo-list',
        text: 'Todolist application. Features include task categorization,' +
            ' real-time updates, and responsive UI using Redux, Axios, and Material-UI',
        src: TodolistPic,
        type: "React",
        domainLink: 'https://fireonex.github.io/TodoList-main',
        codeLink: 'https://github.com/fireonex/TodoList-main.git',
        id: 4
    },
]