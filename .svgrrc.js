module.exports = {
    icon: true,
    noRemoveViewBox: true,
    svgoConfig: {
        plugins: [
            {
                name: 'removeViewBox',
                active: false,
            },
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
        ],
    }
};