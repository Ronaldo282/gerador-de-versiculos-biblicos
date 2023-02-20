const numeros = [
            {texto : "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar",versiculo :'Josué 1:9'},
            {texto : "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",versiculo :'1 Coríntios 13:4-7'},
            {texto : "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.",versiculo :'João 16:33'},
            {texto : "Se o meu povo, que se chama pelo meu nome, se humilhar e orar, buscar a minha face e se afastar dos seus maus caminhos, dos céus o ouvirei, perdoarei o seu pecado e curarei a sua terra.",versiculo :'2 Crônicas 7:14'},
            {texto : "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",versiculo :'1 Tessalonissenses 5:18'},
            {texto : "Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",versiculo :'João 14:6'},
            {texto : "Tudo posso naquele que me fortalece.",versiculo :'Filipenses 4:13'},
            {texto : "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.",versiculo :'Romanos 12:2'},
            {texto : "Vocês, orem assim:Pai nosso, que estás nos céus!Santificado seja o teu nome. Venha o teu Reino;seja feita a tua vontade,assim na terra como no céu. Dá-nos hoje o nosso pão de cada dia. Perdoa as nossas dívidas,assim como perdoamos aos nossos devedores. E não nos deixes cair em tentação,mas livra-nos do mal,porque teu é o Reino, o poder e a glória para sempre. Amém.",versiculo :'Mateus 6:9-13'},
            {texto : "E conhecerão a verdade, e a verdade os libertará",versiculo :'João 8:32'},
            {texto : "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",versiculo :'Filipenses 4:6'},
            {texto : "Mesmo quando eu andar por um vale de trevas e morte,não temerei perigo algum, pois tu estás comigo;a tua vara e o teu cajado me protegem.",versiculo :'Salmo 23:4'},
            {texto : "Entregue o seu caminho ao Senhor, confie nele, e ele agirá:",versiculo :'Salmo 37:5'},
            {texto : "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",versiculo :'João 3:16'},
            {texto : "Consagre ao Senhor tudo o que você faz,e os seus planos serão bem-sucedidos.",versiculo :'Provérbios 16:3'},
            {texto : "Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. Pois todo o que pede recebe; o que busca encontra; e àquele que bate, a porta será aberta.",versiculo :'Mateus 7:7-8'},
            {texto : "Por isso não tema, pois estou com você, não tenha medo, pois sou o seu Deus.Eu o fortalecerei e o ajudarei;eu o segurareicom a minha mão direita vitoriosa.",versiculo :'Izaías 41:10'},
            {texto : "Pois vocês não receberam um espírito que os escravize para novamente temerem, mas receberam o Espírito que os torna filhos por adoção, por meio do qual clamamos: Aba, Pai",versiculo :'Romanos 8:15'},
            {texto : "E conhecerão a verdade, e a verdade os libertará",versiculo :'João 8:32'}
        
        ];
        
        //console.log(numeros[numero]); // resultado aleatório
        

        const botao = document.getElementById("btn");
        botao.addEventListener("click",Clicou);

     function Clicou(){
        const numero = Math.floor(Math.random() * numeros.length);
            const fraseAleatoria = numeros[numero]
            const frase = document.getElementById("frase");
            const versiculo = document.getElementById("versiculo");
            one = fraseAleatoria.texto
            two = fraseAleatoria.versiculo

            frase.innerText = one
            versiculo.innerText = two
    }
