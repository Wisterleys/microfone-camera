class ClassEvent{
    constructor(){
        this._events={}
    }
    on(eventName, fn){
        if(!this._events[eventName]) this._events[eventName] = new Array();

        this._events[eventName].push(fn)
    }
    trigger(){
       let args= [...arguments]
       let eventName = args.shift() // Com o shifit eu pego o primeiro index e coloco na variavel eventName. O objetivo é sempre pregar o primeiro index como o nome do novo evento que estou criando
       args.push(new Event(eventName)) //Adiciona o nome desse evento na lista dos eventos nativos do nagegador. O objetivo aqui é retornar como um evento nativo do navegador que estou criando aqui. Estou dando push para esse evento ser o útltimo no index do array args (args é a variavel que está aqui nesse escopo).
       if(this._events[eventName]instanceof Array){
        this._events[eventName].forEach(fn => {
            fn.aplay(null, args) // Isso aqui basicamente executa as instruções da função passada. Ele pede 2 parametros, o primeiro é sempre null e o segundo passa os argumentos para a função
        });
       }
    }
}