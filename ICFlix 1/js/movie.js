var relatedMovies = new Array(
	new Array(2,3,4,5,6),
	new Array(1,3,4,5,6),
	new Array(1,2,4,5,6),
	new Array(1,2,3,5,6),
	new Array(1,2,3,4,6),
	new Array(1,2,3,4,5),

	new Array(8,9,10,11,12),
	new Array(7,9,10,11,12),
	new Array(7,8,10,11,12),
	new Array(7,8,9,11,12),
	new Array(7,8,9,10,12),
	new Array(7,8,9,10,11),

	new Array(14,15,16,17,18),
	new Array(13,15,16,17,18),
	new Array(13,14,16,17,18),
	new Array(13,14,15,17,18),
	new Array(13,14,15,16,18),
	new Array(13,14,15,16,17));

var movies = new Array(
	new Array("Batman vs Superman", "./images/batman1.jpg", "./images/batman2.jpg", "./images/batman3.jpg", "https://www.youtube.com/embed/IHDgrNxO-5I", "./images/batman.jpg", "https://play.google.com/store/movies/details/Ed_Definitiva_Batman_vs_Superman_A_Origem_da_Justi?id=CUSEcmj3JS4"),
	new Array("Deadpool", "./images/dead1.jpg", "./images/dead2.jpg", "./images/dead3.jpg", "https://www.youtube.com/embed/rW-44KuoAdA", "./images/deadpool.jpg", "https://play.google.com/store/movies/details/Deadpool?id=TjBH2FckLLY"),
	new Array("Capitão América: Guerra Civil", "./images/captain1.jpg", "./images/captain2.jpg", "./images/captain3.jpg", "https://www.youtube.com/embed/FRLYZn5PGuA", "./images/captain.jpg", "https://play.google.com/store/movies/details/Capit%C3%A3o_Am%C3%A9rica_Guerra_Civil?id=spO4wsp4NW0"),
	new Array("Doutor Estranho", "./images/doc1.jpg", "./images/doc2.jpg", "./images/doc3.jpg", "https://www.youtube.com/embed/YUfWrIcX4zw", "./images/drestranho.jpg", "https://play.google.com/store/movies/details/Doutor_Estranho_2016?id=iE2oRz9keak"),
	new Array("Esquadrão Suicida", "./images/square1.jpg", "./images/square2.jpg", "./images/square3.jpeg", "https://www.youtube.com/embed/gWTUvH-P43I", "./images/esuicida.jpg", "https://play.google.com/store/movies/details/Esquadr%C3%A3o_Suicida_2016?id=lq99Axkd0GQ"),
	new Array("Logan", "./images/logan1.jpg", "./images/logan2.jpg", "./images/logan3.jpg", "https://www.youtube.com/embed/RWSuAC9CYxo", "./images/logan.jpg", "https://play.google.com/store/movies/details/Logan_The_Wolverine?id=2FE221868E9C5516MV"),
	new Array("Anjos da Lei", "./images/anjos1.jpg", "./images/anjos2.jpg", "./images/anjos3.jpg", "https://www.youtube.com/embed/1hxGRuQXOas", "./images/anjos.jpg", "https://play.google.com/store/movies/details/Anjos_Da_Lei?id=x5Sowj5pkU4"),
	new Array("As Branquelas", "./images/bran1.jpg", "./images/bran2.jpg", "./images/bran3.jpg", "https://www.youtube.com/embed/tYqzwfqNVL8", "./images/branquelas.jpg", "https://play.google.com/store/movies/details/Loiras_%C3%A0_For%C3%A7a?id=D7330A496012B89FMV"),
	new Array("Esqueceram de Mim", "./images/edm1.jpg", "./images/edm2.jpg", "./images/edm3.jpg", "https://www.youtube.com/embed/xhpYkUCBPo0", "./images/esquecerammim.jpg", "https://play.google.com/store/movies/details/Esqueceram_de_Mim_2_Perdido_em_Nova_York_Dublado?id=xp1Gm_7Hwog"),
	new Array("O Auto da Compadecida", "./images/auto1.jpg", "./images/auto2.jpg", "./images/auto3.jpg", "https://www.youtube.com/embed/62DfweY9xss", "./images/autocompadecida.jpg", "https://play.google.com/store/movies/details/O_Auto_da_Compadecida_%C3%A0_For%C3%A7a?id=D7330A496012B89FMV"),
	new Array("Projeto X", "./images/project1.jpg", "./images/project2.jpg", "./images/project3.jpg", "https://www.youtube.com/embed/kFwGmQIe-rU", "./images/projetox.jpg", "https://play.google.com/store/movies/details/Projeto_X_Legendado?id=GiEsprZB9ps"),
	new Array("Superbad", "./images/super1.jpg", "./images/super2.jpg", "./images/super3.jpg", "https://www.youtube.com/embed/2eNn6jtqM20", "./images/superbad.jpg", "https://play.google.com/store/movies/details/Superbad?id=ecIEkoPjCmE"),
	new Array("Cisne Negro", "./images/cisne1.jpg", "./images/cisne2.jpg", "./images/cisne3.jpg", "https://www.youtube.com/embed/t-weIgpXS6g", "./images/cisnenegro.jpg", "https://play.google.com/store/movies/details/Cisne_Negro_LEG?id=GiHlS2ytjJY"),
	new Array("Garota Exemplar", "./images/garota1.jpg", "./images/garota2.jpg", "./images/garota3.jpg", "https://www.youtube.com/embed/tKwEdRC26xA", "./images/garotaexemplar.jpg", "https://play.google.com/store/movies/details/Garota_Exemplar?id=c4glFiPoc0I"),
	new Array("O Exorcista", "./images/exorcista1.jpg", "./images/exorcista2.jpg", "./images/exorcista3.jpg", "https://www.youtube.com/embed/EVqK-B2SGEw", "./images/exorcista.jpg", "https://play.google.com/store/movies/details/O_Exorcista?id=27882BAAA1EAAA7EMV"),
	new Array("O Grande Truque", "./images/truque1.jpg", "./images/truque2.jpg", "./images/truque3.jpg", "https://www.youtube.com/embed/X_taFutSQHw", "./images/grandetruque.jpg", "https://play.google.com/store/movies/details/O_Grande_Truque_LEG?id=LJFRiyysVg0"),
	new Array("Psicose", "./images/psicose1.jpg", "./images/psicose2.jpg", "./images/psicose3.jpg", "https://www.youtube.com/embed/wfGjWZmyvfo", "./images/psicose.jpg", "https://play.google.com/store/movies/details/Psicose_1998?id=LiX9Uwndsdk"),
	new Array("Silêncio dos Inocentes", "./images/silent1.jpg", "./images/silent2.jpg", "./images/silent3.jpg", "https://www.youtube.com/embed/oSioIEc3c-4", "./images/silencioinocentes.jpg", "https://play.google.com/store/movies/details/O_Sil%C3%AAncio_dos_Inocentes?id=66777D644780CCF4MV"));

var moviesDescription = new Array(
	"<p>O confronto entre Superman (Henry Cavill) e Zod (Michael Shannon) em Metrópolis fez com que a população mundial se dividisse acerca da existência de extra-terrestres na Terra. Enquanto muitos consideram o Superman como um novo deus, há aqueles que consideram extremamente perigoso que haja um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne (Ben Affleck) é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele investiga o laboratório de Lex Luthor (Jesse Eisenberg), que descobriu uma pedra verde que consegue eliminar e enfraquecer os filhos de Krypton.</p>",
	"<p>Ex-militar e mercenário, Wade Wilson (Ryan Reynolds) é diagnosticado com câncer em estado terminal, porém encontra uma possibilidade de cura em uma sinistra experiência científica. Recuperado, com poderes e um incomum senso de humor, ele torna-se Deadpool e busca vingança contra o homem que destruiu sua vida.</p>",
	"<p>Steve Rogers (Chris Evans) é o atual líder dos Vingadores, super-grupo de heróis formado por Viúva Negra (Scarlett Johansson), Feiticeira Escarlate (Elizabeth Olsen), Visão (Paul Bettany), Falcão (Anthony Mackie) e Máquina de Combate (Don Cheadle). O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com Tony Stark (Robert Downey Jr.), o Homem de Ferro.</p>",
	"<p>Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as mãos debilitadas. Devido a falhas da medicina tradicional, ele parte para um lugar inesperado em busca de cura e esperança, um misterioso enclave chamado Kamar-Taj, localizado em Katmandu. Lá descobre que o local não é apenas um centro medicinal, mas também a linha de frente contra forças malignas místicas que desejam destruir nossa realidade. Ele passa a treinar e adquire poderes mágicos, mas precisa decidir se vai voltar para sua vida comum ou defender o mundo.</p>",
	"<p>Após a aparição do Superman, a agente Amanda Waller (Viola Davis) está convencida que o governo americano precisa ter sua própria equipe de metahumanos, para combater possíveis ameaças. Para tanto ela cria o projeto do Esquadrão Suicida, onde perigosos vilões encarcerados são obrigados a executar missões a mando do governo. Caso sejam bem-sucedidos, eles têm suas penas abreviadas em 10 anos. Caso contrário, simplesmente morrem.</p>",
	"<p>Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen). Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce (Boyd Holbrook), interessado na menina.</p>",
	"<p>Jenko (Channing Tatum) e Schmidt (Jonah Hill) estudaram juntos, mas jamais foram amigos. A situação muda quando se reencontram na academia de policiais, onde passam a ajudar um ao outro. Já formados, se envolvem em uma confusão ao tentar realizar a prisão de um traficante de drogas, que atuava no parque onde trabalhavam. Remanejados para uma divisão comandada pelo capitão Walters (Ice Cube), onde jovens policiais trabalham infiltrados, eles recebem a missão de desvendar quem é o fornecedor de uma nova e perigosa droga.</p>",
	"<p>Os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro).</p>",
	"<p>Uma família de Chicago planeja passar o Natal em Paris. Porém, em meio às confusões da viagem, um dos filhos, Kevin (Macaulay Culkin), acaba esquecido em casa. O garoto de apenas oito anos é obrigado a se virar sozinho e defender a casa de dois insistentes ladrões.</p>",
	"<p>As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.</p>",
	"<p>Thomas (Thomas Mann), Costa (Oliver Cooper) e JB (Jonathan Daniel Brown) são grandes amigos. Eles não são populares no colégio nem têm namorada. Sonhando dar uma virada na situação, eles planejam transformar o aniversário de Thomas em um acontecimento épico. Para tanto realizam uma grande festa na casa do aniversariante, aproveitando o fato que os pais dele estarão viajando no fim de semana.</p>",
	"<p>Evan (Michael Cera) e Seth (Jonah Hill) são amigos inseparáveis, que estão terminando o colegial. Eles vão para faculdades diferentes e, desta forma, são obrigados a se separar. Evan é amável, esperto e normalmente aterrorizado com o que acontece à sua volta, enquanto que Seth é desbocado, frívolo e obcecado pela sexualidade. Cada um de sua forma, eles precisarão superar suas frustrações com as mulheres no fim desta fase de suas vidas.</p>",
	"<p>Beth MacIntyre (Winona Ryder), a primeira bailarina de uma companhia, está prestes a se aposentar. O posto fica com Nina (Natalie Portman), mas ela possui sérios problemas pessoais, especialmente com sua mãe (Barbara Hershey). Pressionada por Thomas Leroy (Vincent Cassel), um exigente diretor artístico, ela passa a enxergar uma concorrência desleal vindo de suas colegas, em especial Lilly (Mila Kunis). Em meio a tudo isso, busca a perfeição nos ensaios para o maior desafio de sua carreira: interpretar a Rainha Cisne em uma adaptação de 'O Lago dos Cisnes'.</p>",
	"<p>Amy Dunne (Rosamund Pike) desaparece no dia do seu aniversário de casamento, deixando o marido Nick (Ben Affleck) em apuros. Ele começa a agir descontroladamente, abusando das mentiras, e se torna o suspeito número um da polícia. Com o apoio da sua irmã gêmea, Margo (Carrie Coon), Nick tenta provar a sua inocência e, ao mesmo tempo, procura descobrir o que aconteceu com Amy.</p>",
	"<p>Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.</p>",
	"<p>Século XIX, Londres. Robert Angier (Hugh Jackman) e Alfred Borden (Christian Bale) se conhecem há muitos anos, desde que eram mágicos iniciantes. Desde então eles vivem competindo entre si, o que faz com que a amizade com o passar dos anos se transforme em uma grande rivalidade. Quando Alfred apresenta uma mágica revolucionária, Robert fica obcecado em descobrir como ele consegue realizá-la.</p>",
	"<p>Marion Crane é uma secretária (Janet Leigh) que rouba 40 mil dólares da imobiliária onde trabalha para se casar e começar uma nova vida. Durante a fuga à carro, ela enfrenta uma forte tempestade, erra o caminho e chega em um velho hotel. O estabelecimento é administrado por um sujeito atencioso chamado Norman Bates (Anthony Perkins), que nutre um forte respeito e temor por sua mãe. Marion decide passar a noite no local, sem saber o perigo que a cerca.</p>",
	"<p>A agente do FBI, Clarice Starling (Jodie Foster) é ordenada a encontrar um assassino que arranca a pele de suas vítimas. Para entender como ele pensa, ela procura o periogoso psicopata, Hannibal Lecter (Anthony Hopkins), encarcerado sob a acusação de canibalismo.</p>");

var showImage  = function(idClick){
	var target = document.getElementById("img"+idClick);
	var mainComponent = document.getElementById("imgPrincipal");
	mainComponent.src = target.src;
}

window.onload = function(e){
	idMovie = parseInt(window.location.search.substring(1)) - 1;
	var mainImage = document.getElementById("imgPrincipal");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var titulo = document.getElementById("movieTitle");
	var link = document.getElementById("link-to-buy");
	var descricao = document.getElementById("description");
	var iframe = document.getElementById("iframeMovie");
	var related = document.getElementById("relatedMovies");
    titulo.innerHTML = movies[idMovie][0];
    descricao.innerHTML = moviesDescription[idMovie];
    mainImage.src = movies[idMovie][1];
    img1.src = movies[idMovie][1];
    img2.src = movies[idMovie][2];
    img3.src = movies[idMovie][3];
    iframe.src = movies[idMovie][4];
    link.href = movies[idMovie][6];

		for(var key in relatedMovies[idMovie]){
    	related.innerHTML += '<a href="./movie.html?'+relatedMovies[idMovie][key]+'"><img src="'+movies[relatedMovies[idMovie][key]-1][5]+'"></a>';
    }
}
