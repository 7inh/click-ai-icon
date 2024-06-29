module.exports = {
    icon: true,
    noRemoveViewBox: true,
    svgoConfig: {
        plugins: [
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