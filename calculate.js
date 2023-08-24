function calculatepoints() {
    if(loveranswer.checked){
        lovercorr.style.display="block";
        loverright.style.display="block";
        loverincorr.style.display="none";
        loverwrong.style.display="none";
        a = 5;
    } else{
        loverincorr.style.display="block";
        loverwrong.style.display="block";
        lovercorr.style.display="none";
        loverright.style.display="none";
        a = 0;
    }
    
    if(themananswer.checked){
        themancorr.style.display="block";
        themanright.style.display="block";
        themanincorr.style.display="none";
        themanwrong.style.display="none";
        b = 2;
    } else{
        themancorr.style.display="none";
        themanright.style.display="none";
        themanincorr.style.display="block";
        themanwrong.style.display="block";
        b = 0;
    }
    
    if(loverguitaranswer.checked){
        loverguitarcorr.style.display="block";
        loverguitarright.style.display="block";
        loverguitarincorr.style.display="none";
        loverguitarwrong.style.display="none";
        c = 2;
    } else{
        loverguitarcorr.style.display="none";
        loverguitarright.style.display="none";
        loverguitarincorr.style.display="block";
        loverguitarwrong.style.display="block";
        c = 0;
    }
    
    if(fearlessanswer.checked){
        fearlesscorr.style.display="block";
        fearlessright.style.display="block";
        fearlessincorr.style.display="none";
        fearlesswrong.style.display="none";
        d=5;
    } else{
        fearlesscorr.style.display="none";
        fearlessright.style.display="none";
        fearlessincorr.style.display="block";
        fearlesswrong.style.display="block";
        d=0;
    }
    
    if(evermoreanswer.checked){
        evermorecorr.style.display="block";
        evermoreright.style.display="block";
        evermoreincorr.style.display="none";
        evermorewrong.style.display="none";
        e=2;
    } else{
        evermorecorr.style.display="none";
        evermoreright.style.display="none";
        evermoreincorr.style.display="block";
        evermorewrong.style.display="block";
        e=0;
    }
    
    if(cpcheeranswer.checked){
        cpcheercorr.style.display="block";
        cpcheerright.style.display="block";
        cpcheerincorr.style.display="none";
        cpcheerwrong.style.display="none";
        f=5;
    } else{
        cpcheercorr.style.display="none";
        cpcheerright.style.display="none";
        cpcheerincorr.style.display="block";
        cpcheerwrong.style.display="block";
        f=0;
    }
    
    if(repanswer.checked){
        repcorr.style.display="block";
        repright.style.display="block";
        repincorr.style.display="none";
        repwrong.style.display="none";
        g=13;
    } else{
        repcorr.style.display="none";
        repright.style.display="none";
        repincorr.style.display="block";
        repwrong.style.display="block";
        g=0;
    }
    
    if(snanswer.checked){
        sncorr.style.display="block";
        snright.style.display="block";
        snincorr.style.display="none";
        snwrong.style.display="none";
        h=7;
    } else{
        sncorr.style.display="none";
        snright.style.display="none";
        snincorr.style.display="block";
        snwrong.style.display="block";
        h=0;
    }
    
    if(shirt22answer.checked) {
        shirt22corr.style.display="block";
        shirt22right.style.display="block";      
        shirt22incorr.style.display="none";
        shirt22wrong.style.display="none";
        i=7;
    }else {
        shirt22corr.style.display="none";
        shirt22right.style.display="none";      
        shirt22incorr.style.display="block";
        shirt22wrong.style.display="block";
        i=0;
    }
    
    if(folkloreanswer.checked) {
        folklorecorr.style.display="block";
        folkloreright.style.display="block";
        folkloreincorr.style.display="none";
        folklorewrong.style.display="none";
        j=7;
    }else {
        folklorecorr.style.display="none";
        folkloreright.style.display="none";
        folkloreincorr.style.display="block";
        folklorewrong.style.display="block";
        j=0;
    }
    
    if(set1989answer.checked) {
        set1989corr.style.display="block";
        set1989right.style.display="block";
        set1989incorr.style.display="none";
        set1989wrong.style.display="none";
        k=5;
    }else {
        set1989corr.style.display="none";
        set1989right.style.display="none";
        set1989incorr.style.display="block";
        set1989wrong.style.display="block";
        k=0;
    }
    
    if(guitarspeechanswer.checked) {
        guitarspeechcorr.style.display="block";
        guitarspeechright.style.display="block";
        guitarspeechincorr.style.display="none";
        guitarspeechwrong.style.display="none";
        l=2;
    }else {
        guitarspeechcorr.style.display="none";
        guitarspeechright.style.display="none";
        guitarspeechincorr.style.display="block";
        guitarspeechwrong.style.display="block";
        l=0;
    }
    
    if(guitaralbumanswer.checked) {
        guitaralbumcorr.style.display="block";
        guitaralbumright.style.display="block";
        guitaralbumincorr.style.display="none";
        guitaralbumwrong.style.display="none";
        m=6.5;
    }else {
        guitaralbumcorr.style.display="none";
        guitaralbumright.style.display="none";
        guitaralbumincorr.style.display="block";
        guitaralbumwrong.style.display="block";
        m=0;
    }
    
    if(pianospeechanswer.checked) {
        pianospeechcorr.style.display="block";
        pianospeechright.style.display="block";
        pianospeechincorr.style.display="none";
        pianospeechwrong.style.display="none";
        o=2;
    }else {
        pianospeechcorr.style.display="none";
        pianospeechright.style.display="none";
        pianospeechincorr.style.display="block";
        pianospeechwrong.style.display="block";
        o=0;
    }
    
    if(pianoalbumanswer.checked) {
        pianoalbumcorr.style.display="block";
        pianoalbumright.style.display="block";
        pianoalbumincorr.style.display="none";
        pianoalbumwrong.style.display="none";
        p=7;
    }else {
        pianoalbumcorr.style.display="none";
        pianoalbumright.style.display="none";
        pianoalbumincorr.style.display="block";
        pianoalbumwrong.style.display="block";
        p=0;
    }
    
    if(midnightsanswer.checked) {
        midnightscorr.style.display="block";
        midnightsright.style.display="block";
        midnightsincorr.style.display="none";
        midnightswrong.style.display="none";
        r=2;
    }else {
        midnightscorr.style.display="none";
        midnightsright.style.display="none";
        midnightsincorr.style.display="block";
        midnightswrong.style.display="block";
        r=0;
    }
    
    if(mranswer.checked) {
        mrcorr.style.display="block";
        mrright.style.display="block";
        mrincorr.style.display="none";
        mrwrong.style.display="none";
        s=2;
    }else {
        mrcorr.style.display="none";
        mrright.style.display="none";
        mrincorr.style.display="block";
        mrwrong.style.display="block";
        s=0;
    }
    
    if(karmaanswer.checked) {
        karmacorr.style.display="block";
        karmaright.style.display="block";
        karmaincorr.style.display="none";
        karmawrong.style.display="none";
        t=3;
    }else {
        karmacorr.style.display="none";
        karmaright.style.display="none";
        karmaincorr.style.display="block";
        karmawrong.style.display="block";
        t=0;
    }
    
    
    if(guestanswer.checked) {
        guestcorr.style.display="block";
        guestright.style.display="block";
        guestincorr.style.display="none";
        guestwrong.style.display="none";
        u=5;
    }else {
         guestcorr.style.display="none";
        guestright.style.display="none";
        guestincorr.style.display="block";
        guestwrong.style.display="block";
        u=0;
    }
    
    if(unhingedanswer.checked) {
        unhingedcorr.style.display="block";
        unhingedright.style.display="block";
        unhingedincorr.style.display="none";
        unhingedwrong.style.display="none"
        v=5;
    }else {
        unhingedcorr.style.display="none";
        unhingedright.style.display="none";
        unhingedincorr.style.display="block";
        unhingedwrong.style.display="block"
        v=0;
    }
    
    if(mishapanswer.checked) {
        mishapcorr.style.display="block";
        mishapright.style.display="block";
        mishapincorr.style.display="none";
        mishapwrong.style.display="none";
        w=5;
    }else {
        mishapcorr.style.display="none";
        mishapright.style.display="none";
        mishapincorr.style.display="block";
        mishapwrong.style.display="block";
        w=0;
    }
    
    if(guitaranswer.indexOf(guitarguess.value) !== -1) {
        guitarsongcorr.style.display="block";
        guitarsongright.style.display="block";
        guitarsongincorr.style.display="none";
        guitarsongwrong.style.display="none";
        guitarispiano.style.display="none";
        guitarguess.classList.add("guess-correct");
        guitarguess.classList.remove("guess-incorrect");
        n=6.5;
    }else if(pianoanswer.indexOf(guitarguess.value) !== -1) {
        guitarsongcorr.style.display="none";
        guitarsongright.style.display="block";
        guitarsongincorr.style.display="none";
        guitarsongwrong.style.display="none";
        guitarispiano.style.display="block";
        guitarguess.classList.add("guess-correct");
        guitarguess.classList.remove("guess-incorrect");
        n=6.5;
    } else {
        guitarsongcorr.style.display="none";
        guitarsongright.style.display="none";
        guitarsongincorr.style.display="block";
        guitarsongwrong.style.display="block";
        guitarispiano.style.display="none";
        guitarguess.classList.add("guess-incorrect");
        guitarguess.classList.remove("guess-correct");
        n=0;
    }
    
    if(pianoanswer.indexOf(pianoguess.value) !== -1) {
        pianosongcorr.style.display="block";
        pianosongright.style.display="block";
        pianosongincorr.style.display="none";
        pianosongwrong.style.display="none";
        pianoisguitar.style.display="none";
        pianoguess.classList.add("guess-correct");
        pianoguess.classList.remove("guess-incorrect");
        q=7;
    }else if(guitaranswer.indexOf(pianoguess.value) !== -1) {
        pianosongcorr.style.display="none";
        pianosongright.style.display="block";
        pianosongincorr.style.display="none";
        pianosongwrong.style.display="none";
        pianoisguitar.style.display="block";
        pianoguess.classList.add("guess-correct");
        pianoguess.classList.remove("guess-incorrect");
        q=7;
    } else {
        pianosongcorr.style.display="none";
        pianosongright.style.display="none";
        pianosongincorr.style.display="block";
        pianosongwrong.style.display="block";
        pianoisguitar.style.display="none";
        pianoguess.classList.add("guess-incorrect");
        pianoguess.classList.remove("guess-correct");
        q=0;
    }
    if(guitaranswer.indexOf(pianoguess.value) !==-1 && guitaranswer.indexOf(guitarguess.value) !==-1) {
        alert("You have entered the same surprise song twice. It did turn out to be the Guitar acoustic. Therefore, it will be counted correct in the Guitar acoustic section, and you will be granted 6.5 points out of 6.5, but it will be counted wrong in the Piano acoustic song and you will be granted 0 points out of 7.");
        guitarsongcorr.style.display="block";
        guitarsongright.style.display="block";
        guitarsongincorr.style.display="none";
        guitarsongwrong.style.display="none";
        guitarispiano.style.display="none";
        n=6.5;
        pianosongcorr.style.display="none";
        pianosongright.style.display="none";
        pianosongincorr.style.display="block";
        pianosongwrong.style.display="block";
        pianoisguitar.style.display="none";
        q=0;
        guitarguess.classList.add("guess-correct");
        guitarguess.classList.remove("guess-incorrect");
        pianoguess.classList.add("guess-incorrect");
        pianoguess.classList.remove("guess-correct");
    }
    if(pianoanswer.indexOf(pianoguess.value) !==-1 && pianoanswer.indexOf(guitarguess.value) !==-1) {
        alert("You have entered the same surprise song twice. It did turn out to be the Piano acoustic. Therefore, it will be counted correct in the Piano acoustic section, and you will be granted 7 points out of 7, but it will be counted wrong in the Guitar acoustic song and you will be granted 0 points out of 6.5.");
        guitarsongcorr.style.display="none";
        guitarsongright.style.display="none";
        guitarsongincorr.style.display="block";
        guitarsongwrong.style.display="block";
        guitarispiano.style.display="none";
        guitarguess.classList.add("guess-incorrect");
        guitarguess.classList.remove("guess-correct");
        pianoguess.classList.add("guess-correct");
        pianoguess.classList.remove("guess-incorrect");
        n=0;
        pianosongcorr.style.display="block";
        pianosongright.style.display="block";
        pianosongincorr.style.display="none";
        pianosongwrong.style.display="none";
        pianoisguitar.style.display="none";
        q=7;
    }
    if(pianoanswer.indexOf(pianoguess.value) !==-1 && guitaranswer.indexOf(guitarguess.value) !==-1) {
        alert("Well done! You got both surprise songs correct!")
    }
    if(pianoanswer.indexOf(guitarguess.value) !==-1 && guitaranswer.indexOf(pianoguess.value) !==-1) {
        alert("Well done! You got both surprise songs correct but with switched instruments. Don't worry, you still receive your points!")
    }
    
    let x = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u + v + w; document.getElementById("total-points").innerHTML = x;
    if(x>56){
        document.getElementById("total-points").style.color="#168117";
    } else{
        document.getElementById("total-points").style.color="#d60900";
    }
    loveranswer.parentElement.classList.add("right-answer");
    themananswer.parentElement.classList.add("right-answer");
    loverguitaranswer.parentElement.classList.add("right-answer");
    fearlessanswer.parentElement.classList.add("right-answer");
    evermoreanswer.parentElement.classList.add("right-answer");
    cpcheeranswer.parentElement.classList.add("right-answer");
    repanswer.parentElement.classList.add("right-answer");
    snanswer.parentElement.classList.add("right-answer");
    shirt22answer.parentElement.classList.add("right-answer");
    folkloreanswer.parentElement.classList.add("right-answer");
    set1989answer.parentElement.classList.add("right-answer");
    guitarspeechanswer.parentElement.classList.add("right-answer");
    guitaralbumanswer.parentElement.classList.add("right-answer");
    pianospeechanswer.parentElement.classList.add("right-answer");
    pianoalbumanswer.parentElement.classList.add("right-answer");
    midnightsanswer.parentElement.classList.add("right-answer");
    mranswer.parentElement.classList.add("right-answer");
    karmaanswer.parentElement.classList.add("right-answer");
    guestanswer.parentElement.classList.add("right-answer");
    unhingedanswer.parentElement.classList.add("right-answer");
    mishapanswer.parentElement.classList.add("right-answer");
     document.getElementById("guitar-surprise-song-answers").innerHTML = surpriseanswers;
document.getElementById("piano-surprise-song-answers").innerHTML = surpriseanswers;
document.getElementById("guitar-surprise-song-answers").style.display="block";
document.getElementById("piano-surprise-song-answers").style.display="block";
}
