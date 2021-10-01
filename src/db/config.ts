importar  {  createClient  }  de  'redis'

export  const  redisClient  =  createClient ( )
redisClient . conectar ( ) . então ( assíncrono  ( )  =>  {
    console . log ( 'App conectado ao Redis' )
    aguarde  redisClient . set ( 'professor' ,  'Sidney Sousa' )
    console . log ( esperar  redisClient . get ( 'professor' ) )
})

processo . em ( 'SIGINT' ,  ( )  =>  {
    redisClient . desconectar ( )
    console . log ( 'App desconectado do Redis' )
})