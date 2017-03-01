module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-systemjs-builder');

    grunt.initConfig({
        copy: {
            js: {
                files: [
                    // includes files within path and its sub-directories
                    {expand: true, src: ['js/**'], dest: 'dist/'},
                ],
            },

            css: {
                files: [
                    // includes files within path and its sub-directories
                    {expand: true, src: ['css/**'], dest: 'dist/'},
                ],
            }
        },
        eslint: {
            js: ['js']
        },
        clean: {
            dist: ['dist']
        },
        less: {
            dev: {
                files: {
                    'css/app.css': 'less/app.less'
                }
            }
        },
        systemjs: {
            options: {
                sfx: false,
                baseURL: '.',
               // configFile: './target/config.js',
                minify: true,
                build: {
                    mangle: false
                }
            },
            dist: {
                files: [{
                    'src':  './js/main.js',
                    'dest': './dist/js/app.min.js'
                }]
            }
        }
    });

    grunt.registerTask('dist', [
        'eslint:js',
        'clean:dist',
        'systemjs:dist',
        'copy:css',
    ]);

    /*
    - Faire vérifier les conventions ESLint
     (pas de build si pas respectées)
    - clean du dossier dist
    - Builder les fichiers LESS avant de copier les fichiers CSS
    - Bundler avec SystemJS Builder le JS
    - copier les fichiers nécessaires de node_modules
     */
};