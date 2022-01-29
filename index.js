function x(){
    a()
    function a(){console.log('m')}
    a()
    function a(){console.log('n')}
    a()
}
var funcs = constfuncs(); console.log(funcs[5]())