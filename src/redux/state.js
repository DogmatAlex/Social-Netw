let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi! How're you?", likesCount: 11 },
            { id: 2, message: "It's my first post!", likesCount: 25 },
            { id: 3, message: 'This network is awesome!', likesCount: 33 },
        ],
    },

    messagePage: {
        dialogsData: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Christina' },
            { id: 3, name: 'Ivan' },
            { id: 4, name: 'Boris' },
            { id: 5, name: 'Svetlana' },
            { id: 6, name: 'Yura' },
        ],
        messagesData: [
            { id: 1, message: 'Yo man!' },
            { id: 2, message: 'Hi dude!' },
            { id: 3, message: "How're u doing?" },
            { id: 4, message: 'Fine, thx!' },
        ],
    },
};

export default state;
