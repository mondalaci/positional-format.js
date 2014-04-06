/**
 * References:
 * - http://stackoverflow.com/a/6449623/1449117
 * - http://stackoverflow.com/a/1685917/1449117
 * - http://stackoverflow.com/a/4673436/1449117             
 */
if (!String.prototype.format) {
    
    String.prototype.format = function() {

        function toFixed(x) {

            var e;

            if (Math.abs(x) < 1.0) {

                e = parseInt(x.toString().split('e-')[1])
                
                if (e) {

                    x *= Math.pow(10, e - 1)
                    var pos = x.toString().indexOf('.') + 1,
                        pre = x.toString().substr(0, pos)

                    x = pre + (new Array(e + 1)).join('0') + x.toString().substring(pos)
                }

            } else {

                e = parseInt(x.toString().split('+')[1])

                if (e > 20) {

                    e -= 20
                    x /= Math.pow(10, e)
                    x += (new Array(e + 1)).join('0')

                }

            }

            return x
        
        }

        var args = arguments

        return this.replace(/{(\d+)}/g, function(match, number) {

            if (args[number] != 'undefined') {

                var arg = args[number],
                    isArgANumber = !isNaN(parseFloat(arg)) && isFinite(arg)
                
                return  isArgANumber ? toFixed(arg) : arg;

            } else {

                return match
            
            }

        })

    }

}