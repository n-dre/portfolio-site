module.exports = function(grunt) {
    grunt.initConfig({
        image: {
            static: {
                options: {
                    optipng: false,
                    pngquant: true,
                    zopflipng: true,
                    jpegRecompress: false,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true
                },
                files: {
                    'dist/img.png': 'src/img.png',
                    'dist/img.jpg': 'src/img.jpg',
                    'dist/img.gif': 'src/img.gif',
                    'dist/img.svg': 'src/img.svg'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-image');
};