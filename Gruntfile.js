module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            options: {
                banner: '/*!\n * <%= pkg.name %> <%= pkg.version %>\n * https://github.com/mondalaci/positional-format.js' +
                        '\n *\n * Copyright 2014\n * Released under the MIT license' +
                        '\n * https://github.com/mondalaci/positional-format.js/blob/master/LICENSE' +
                        '\n *\n * Build: <%= grunt.template.today("dd-mm-yyyy") %>\n */\n'
            },
            dist: {
                files: {
                    'dist/positional-format.min.js': ['src/positional-format.js']
                }
            }
        },

        qunit: {
            all: ['test/index.html']
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/unit/*.js'],
            options: {
                jshintrc: true,
                globals: {
                    console: true,
                    module: true,
                    document: true
                }
            }
        }

  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-qunit')

  grunt.registerTask('test', ['jshint', 'qunit'])
  grunt.registerTask('default', ['test', 'uglify'])

}