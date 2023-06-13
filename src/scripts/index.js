import {abi, contractAddress} from "./constants";
import React from "react";
import Web3 from 'web3'
import "./jquery.color.js"
import Moralis from "moralis";
import {ID, URL_LINE} from "../../pr/m";
import("../index.html")
import("../styles/style.css")



const homeVideo = document.getElementById("homeVideo");
const homeImg = document.getElementById("homeImg");

if (window.screen.width <= 1367){
    homeVideo.hidden = true;
    homeVideo.remove()
}

const joinCommunity = document.getElementById("join")

joinCommunity.onclick = ()=>{
    window.open("https://discord.gg/A67mhBmThy", "_blank")
}

var animate = function (entries, observer) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('trnsf');
            return;
        }

        entry.target.classList.remove('trnsf');
    });
};

const observer = new IntersectionObserver(animate);

const elements = document.querySelectorAll('.needs-animation');

elements.forEach((element) => {
    observer.observe(element);
});

var curtainAnim = function (entries, observer) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('trnsf');
        }
    });
};


const rulesPrt = document.getElementById("rulesPart");
const nftPrt = document.getElementById("nftPart");
const mainPrt = document.getElementById("mainPart");
const rules = document.getElementById("rules");

var rulesAnim = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            mainPrt.classList.add("rules-main-make-visible")
            rulesPrt.classList.add("rules-main-make-visible")
            nftPrt.classList.add("rules-main-make-visible")
            setTimeout(()=>{
                rulesPrt.classList.add("rules-o");
                nftPrt.classList.add("nft-o");
                mainPrt.classList.add("rules-main-o");
            }, 10)
            setTimeout(() => {
                rulesPrt.classList.add("rules-o-s");
                nftPrt.classList.add("nft-o-s");
                setTimeout(() => {
                    rulesPrt.classList.add("rules-o-t")
                }, 500)
            }, 700)
        }
    })
}

const rulesObserver = new IntersectionObserver(rulesAnim);

rulesObserver.observe(rules);

const curtainObserver = new IntersectionObserver(curtainAnim);

const el = document.querySelectorAll('.needs-curtain-anim');

el.forEach((elem) => {
    curtainObserver.observe(elem)
});


const walletSection = document.querySelector(".sel-wal-sec");

function findParent(el) {
    let elem = el
    while (elem.parentNode != document.body) {
        if (elem.parentNode == walletSection) {
            return true;
        }
        elem = elem.parentNode;
    }
    return false;
}
let lastElem = document.querySelector(".e-s")
const blurForPage = document.getElementById("wal-sec")

// function editNavInsideOpenMethods(){
//     nav.forEach((expand)=>{
//         expand.style.height = (lastElem.getBoundingClientRect().top + lastElem.clientHeight + window.pageYOffset) * 100 / window.innerWidth + "vw"// expand
//     })
// }

function open_select_wallet() {
    if (walletSection.classList.contains("opened")) {
        walletSection.classList.remove("opened");
        blurForPage.classList.remove("visible")
        unblur_all_wal()
    } else {
        walletSection.classList.add("opened");
        blurForPage.classList.add("visible")
        // editNavInsideOpenMethods()
        blur_all_wal()
    }
}

let elem = document.querySelectorAll("body > div")
let vid = document.querySelectorAll("video")

function blur_all(){
    elem.forEach((el)=>{
        if (!el.classList.contains("navigation") && !el.classList.contains("mint-w") && !el.classList.contains("sel-wal-sec") && !el.classList.contains("not-container") && !el.classList.contains("blurForVideo")){
            el.classList.add("blur")
        }
    })
    vid.forEach((el)=>{
        el.classList.add("blur")
    })
}

function blur_all_donation(){
    elem.forEach((el)=>{
        if (!el.classList.contains("navigation") && !el.classList.contains("not-container") && !el.classList.contains("blurForVideo") && !el.classList.contains("donation")){
            el.classList.add("blur-donat")
        }
    })
    vid.forEach((el)=>{
        el.classList.add("blur-donat")
    })
}

function blur_all_wal(){
    elem.forEach((el)=>{
        if (!el.classList.contains("navigation") && !el.classList.contains("mint-w") && !el.classList.contains("sel-wal-sec") && !el.classList.contains("not-container") && !el.classList.contains("blurForVideo")){
            el.classList.add("blur-wal")
        }
    })
    vid.forEach((el)=>{
        el.classList.add("blur-wal")
    })
}

function unblur_all(){
    elem.forEach((el)=>{
        if (!el.classList.contains("navigation") && !el.classList.contains("mint-w") && !el.classList.contains("sel-wal-sec") && !el.classList.contains("not-container") && !el.classList.contains("blurForVideo")){
            el.classList.remove("blur")
        }
    })
    vid.forEach((el)=>{
        el.classList.remove("blur")
    })
}

function unblur_all_donation(){
    elem.forEach((el)=>{
        if (!el.classList.contains("navigation") && !el.classList.contains("not-container") && !el.classList.contains("blurForVideo") && !el.classList.contains("donation")){
            el.classList.remove("blur-donat")
        }
    })
    vid.forEach((el)=>{
        el.classList.remove("blur-donat")
    })
}

function unblur_all_wal(){
    elem.forEach((el)=>{
        if (!el.classList.contains("navigation") && !el.classList.contains("mint-w") && !el.classList.contains("sel-wal-sec") && !el.classList.contains("not-container") && !el.classList.contains("blurForVideo")){
            el.classList.remove("blur-wal")
        }
    })
    vid.forEach((el)=>{
        el.classList.remove("blur-wal")
    })
}

const walletBtn = document.querySelector(".small-wallet");
walletBtn.addEventListener("click", open_select_wallet);

document.addEventListener("click", (ev) => {
    if (ev.target == walletBtn || ev.target == walletSection || findParent(ev.target)) {
        return;
    }
    walletSection.classList.remove("opened");
    blurForPage.classList.remove("visible")
    unblur_all_wal()
})

const donationWindow = document.querySelector(".donation")
const donationBtn = document.getElementById("donation")
const blurForDonation = document.getElementById("donat-sec")
const inDon = document.getElementById("in-don")

function openDonation(){
    if (donationWindow.classList.contains("o")) {
        donationWindow.classList.remove("o");
        blurForDonation.classList.remove("visible")
        unblur_all_donation()
    } else {
        donationWindow.classList.add("o");
        blurForDonation.classList.add("visible")
        // editNavInsideOpenMethods()
        blur_all_donation()
    }
}

donationBtn.onclick = openDonation

document.addEventListener("click", (ev) => {
    if (ev.target == donationWindow || ev.target == donationBtn || ev.target == inDon ) {
        return;
    }
    donationWindow.classList.remove("o");
    blurForDonation.classList.remove("visible")
    unblur_all_donation()
})


const  blurForPageMint = document.getElementById("mint-sec")
const mint_window = document.querySelector(".mint-w")

async function open_mint_window() {

    if (!await recheckIfProviderConnected()){
        return
    }

    if (mint_window.classList.contains("m-o")) {
        mint_window.classList.remove("m-o");
        blurForPageMint.classList.remove("visible")
        unblur_all()
    } else {
        mint_window.classList.add("m-o");
        blurForPageMint.classList.add("visible")
        // editNavInsideOpenMethods()
        blur_all()
    }

}

function findParentMint(el) {
    let elem = el
    while (elem.parentNode != document.body) {
        if (elem.parentNode == mint_window) {
            return true;
        }
        elem = elem.parentNode;
    }
    return false;
}

const mintOpenBtn = document.getElementById("mintOpenBtn");
mintOpenBtn.addEventListener("click", open_mint_window)

document.addEventListener("click", (ev) => {
    if (ev.target == mintOpenBtn || ev.target == mint_window || findParentMint(ev.target)) {
        return;
    }
    mint_window.classList.remove("m-o");
    blurForPageMint.classList.remove("visible")
    unblur_all()
})

const faq_blocks = document.querySelectorAll(".faq-block");


faq_blocks.forEach((elem) => {
    elem.addEventListener("click", (ev) => {
        let description = ev.target.parentNode.querySelector(".faq-description");
        let plus = ev.target.querySelector(".plus-sign");
        if (description.classList.contains("opened-faq")) {
            description.classList.add("close-faq")
            description.classList.remove("opened-faq");
            plus.classList.remove("opened-plus");
            // editNavHeight(-4.4921875)
            setTimeout(() => {
                description.classList.remove("close-faq")
            }, 200);
        } else {
            description.classList.add("opened-faq");
            plus.classList.add("opened-plus");
            // editNavHeight(4.4921875)
        }
    })
})


const not_container = $('.not-container')

function add_warning(line, val){
    let $elem = $('<div class="notification">' +
        '<div style="display: flex; width: fit-content; height: fit-content; flex-direction: column">' +
            '<div style="font-size: 0.65vw">Warning</div>' +
            '<div style="width: fit-content; position:relative; top: 0.2vw">' + line + '</div>' +
        '</div>' +
    '</div>');
    $elem.prependTo(not_container).animate({borderWidth: "0.16vw"}, 50).delay(50).animate({width: val + "vw", padding: "0.9vw 0.9vw 1.1vw 1.5vw"}, 250).delay(250)
    let $link = $(".notification:last a")
    if ($link.length > 0){
    }
    $elem.animate({color: "#F2B003"}, 200, function (){
        if ($link.length > 0){
            $link.first().animate({color: "#F2B003"}, 200)
        }
    })

    $elem.delay(6000)
    $elem.fadeTo(1000, 0).delay(50, function () {
        $elem.remove()
    });
}

function add_success(line, val){
    let $elem = $('<div class="notification success">' +
        '<div style="display: flex; width: fit-content; height: fit-content; flex-direction: column">' +
        '<div style="font-size: 0.65vw">Warning</div>' +
        '<div style="width: fit-content; position:relative; top: 0.2vw">' + line + '</div>' +
        '</div>' +
        '</div>');
    $elem.prependTo(not_container).animate({borderWidth: "0.16vw"}, 50).delay(50).animate({width: val + "vw", padding: "0.9vw 0.9vw 1.1vw 1.5vw"}, 250).delay(250)
    let $link = $(".notification:last a")
    $elem.animate({color: "#FFAEF7"}, 200, function (){
        if ($link.length > 0){
            $link.first().animate({color: "#FFAEF7"}, 200)
        }
    })

    $elem.delay(6000)
    $elem.fadeTo(1000, 0).delay(50, function () {
        $elem.remove()
    });
}

//---------------------------------------------------------

let cost;
let accounts;

async function recheckIfProviderConnected(){

    console.log(window)
    if (window.web3 === undefined || window.web3.eth === undefined){
        console.log("Connect wallet to continue")
        add_warning("Connect wallet to continue", 18);
        return false
    }

    try {
        await window.web3.currentProvider.request({method: 'eth_requestAccounts'});
        provider = window.web3.currentProvider
    } catch (e) {
        if (e.code == 4001) {
            console.log("you canceled login")
            add_warning("You canceled the login", 18)
        }
        provider = undefined
        console.log(e)
        return false
    }


    if (provider == undefined || provider == null) {
        console.log("connect wallet to continue")
        add_warning("Connect wallet to continue", 18)
        return false
    }

    if (!await checkChain()) {
        console.log("switch your chain to polygon")
        add_warning("Switch your chain to polygon", 21)
        return false
    }

    if (window.web3.contract == undefined){
        await createContractInstance()
    }

    return true
}


const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const setMaxBtn = document.getElementById("setMaxBtn");
const mintBtn = document.getElementById("mintBtn");
const mintAmount = document.getElementById("mintAmount");
const priceValue = document.getElementById("priceValue");
const totalPrice = document.getElementById("totalPrice");
const trnsInfo = document.getElementById("trnsInfo");
const countdown = document.querySelector(".countdown")

mintAmount.value = 1


function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date().toString());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


let sold = 0

//decaparated

// const serverUrl = URL_LINE
// const appId = ID
// Moralis.start({ serverUrl, appId });
// const query = new Moralis.Query("CountNFT")

function updateDB(val){
    // query.first().then((e) => {
    //     e.fetch()
    //     e.set("sold", e.get("sold") + val)
    //     e.save();
    //     return true;
    // });
    console.log(val)
}

function initializeClock(endTime) {


    function updateClock() {
        let t = getTimeRemaining(endTime);
        countdown.innerHTML = t.days + ":" + ('0' + t.hours).slice(-2) + ":" + ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2)

        if (t.total <= 0) {
            clearInterval(timeInterval);
            mintBtn.disabled = false
            mintBtn.classList.add("m-b-r")
            function updateSoldInfo(){
                // query.first().then((e) => {
                //     sold = e.get("sold")
                // })

                countdown.innerHTML = sold + "/8888";

                if (sold == 8888){
                    countdown.innerHTML = "Sold out"
                    mintBtn.disabled = true;
                    mintBtn.classList.remove("m-b-r");
                    clearInterval(updateInterval);
                }
            }
            updateSoldInfo();
            let updateInterval = setInterval(updateSoldInfo, 10000)
        }
    }

    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
}

let deadline = "May 19 2022 19:00:00 UTC"
// let deadline = "April 18 2022 23:00:00 UTC"
initializeClock(deadline);


mintAmount.addEventListener("input", () => {
    if (parseInt(mintAmount.value) < 1){
        mintAmount.value = 1
        totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * parseInt(mintAmount.value) + " matic"
    }
    if (parseInt(mintAmount.value) > 5){
        mintAmount.value = 5
        totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * parseInt(mintAmount.value) + " matic"
    }
})

function increaseNftAmount(){
    if (parseInt(mintAmount.value) < 5){
        mintAmount.value = (parseInt(mintAmount.value) + 1).toString()
        totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * parseInt(mintAmount.value) + " matic"
    }
    if (mintAmount.value == ""){
        mintAmount.value = 1
        totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * parseInt(mintAmount.value) + " matic"
    }
}

incBtn.onclick = increaseNftAmount;

function decreaseNftAmount(){
    if (parseInt(mintAmount.value) > 1){
        mintAmount.value = (parseInt(mintAmount.value) - 1).toString()
        totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * parseInt(mintAmount.value) + " matic"
    }
    if (mintAmount.value == ""){
        mintAmount.value = 1
        totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * parseInt(mintAmount.value) + " matic"
    }
}

decBtn.onclick = decreaseNftAmount;

function setMaxNftAmount(){
    mintAmount.value = "5"
    totalPrice.innerHTML = "Total: " + window.web3.utils.fromWei(cost, 'ether') * 5 + " matic"
}

setMaxBtn.onclick = setMaxNftAmount


mintBtn.onclick = mint

async function mint() {

    if (!await recheckIfProviderConnected()){
        return
    }

    const amount = parseInt(mintAmount.value);
    const bigCost = BigInt(cost)
    const value = BigInt(bigCost) * BigInt(amount);

    if (true) {
        // PUBLIC MINT
        try {
            mintBtn.disabled = true
            mintBtn.classList.remove("m-b-r")
            mintBtn.innerHTML = '<div class="spinner-box">' +
                '<div class="pulse-container">' +
                '<div class="pulse-bubble pulse-bubble-1"></div>' +
                '<div class="pulse-bubble pulse-bubble-2"></div>' +
                '<div class="pulse-bubble pulse-bubble-3"></div>' +
                '</div>' +
                '</div>'
            const mintTransaction = await contract.methods.mint(amount)
                .send({from: provider.selectedAddress, value: value.toString()});
            if (mintTransaction) {
                mintBtn.classList.add("m-b-r");
                mintBtn.disabled = false
                mintBtn.innerHTML = "Mint"
                const url = `https://mumbai.polygonscan.com/tx/${mintTransaction.transactionHash}`;
                updateDB(amount)

                trnsInfo.innerHTML = '<a>You can see your transaction <a target="_blank" style="color: #4BD6B4" href="' + url + '">here</a> </a>'
                console.log("Minted successfully!", `Transaction Hash: ${mintTransaction.transactionHash}`);
                add_success("Minted successfully!", 18)
            } else {
                console.log("Failed to mint!");
                add_warning("Failed to mint!", 18)
                mintBtn.classList.add("m-b-r");
                mintBtn.disabled = false
                mintBtn.innerHTML = "Mint"
            }
        } catch (e) {
            console.log(e);
            if (e.code == 4001){
                add_warning("You denied transaction signature", 20)
            } else {
                add_warning("Something went wrong", 18);
            }
            mintBtn.classList.add("m-b-r");
            mintBtn.disabled = false
            mintBtn.innerHTML = "Mint"
        }
    }
}


//----------------------------------------------

let metaMask = document.getElementById("metaMask");
console.log(metaMask)
let walletConnect = document.getElementById("walletConnect");
let coinbase = document.getElementById("coinBase");
metaMask.addEventListener("click", connectToMeta)
coinbase.addEventListener("click", connectToCoin)


let chain = "polygon"

async function checkChain() {
    let chainId = 0;
    if (chain === 'mumbai') {
        chainId = 80001;
    } else if (chain === 'polygon') {
        chainId = 137;
    }
    if (provider.networkVersion != chainId) {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: Web3.utils.toHex(chainId)}],
            });
            return true
        } catch (err) {
            if (err.code === 4902) {
                try {
                    if (chain === 'polygon') {
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainName: 'Polygon Mainnet',
                                    chainId: Web3.utils.toHex(chainId),
                                    nativeCurrency: {name: 'MATIC', decimals: 18, symbol: 'MATIC'},
                                    rpcUrls: ['https://polygon-rpc.com/'],
                                },
                            ],
                        });
                    }
                    return true
                } catch (err) {
                    console.log(err);
                    return false
                }
            }
            return false
        }
    } else {
        return true
    }
}

let provider;


async function enableWeb3(prov) {

    window.web3 = new Web3(prov);
    console.log(window.web3)

    if (!await checkChain()){
        add_warning("Switch your chain to polygon", 21)
    }
}

async function createContractInstance(){
    window.contract = await new window.web3.eth.Contract(abi, contractAddress);
    try {
        await window.contract.methods.cost().call().then(result => {
            cost = result
        })
    } catch (e){
        console.log(e)
    }
    priceValue.innerHTML = 'Price per mint: ' + window.web3.utils.fromWei(cost, "ether") + ' matic'
    totalPrice.innerHTML = 'Total: ' + window.web3.utils.fromWei(cost, "ether") + ' matic'
}

async function connectToMeta() {

    console.log("Connecting to Meta...")

    if (window.ethereum.providers != undefined) {
        provider = window.ethereum.providers.find((provider) => provider.isMetaMask);
        if (provider == undefined) {
            //install metamask
            console.log("install metamask");
            let $link = $('<a class="atagclass" href="https://metamask.io/" target="_blank">here</a>')
            add_warning("It looks like you don't have Metamask, you can install it " + $link.get(0).outerHTML, 37)
            return;
        }
    } else {
        if (window.ethereum.isMetaMask) {
            provider = window.ethereum
        } else {
            console.log("install metamask")
            let $link = $('<a class="atagclass" href="https://metamask.io/" target="_blank">here</a>')
            add_warning("It looks like you don't have Metamask, you can install it " + $link.get(0).outerHTML, 37)
            return;
        }
    }

    try {
        await provider.request({method: 'eth_requestAccounts'});
    } catch (e) {
        if (e.code == 4001) {
            console.log("you canceled login")
            add_warning("You canceled the login", 18)
        }
        provider = undefined
        console.log(e)
        return
    }

    await enableWeb3(provider);

    console.log("You have successfully logged in")
    add_success("You have successfully logged in", 25)


}

await connectToCoin()

async function connectToCoin() {

    if (window.ethereum.providers != undefined) {
        provider = window.ethereum.providers.find((provider) => provider.isCoinbaseWallet);
        if (provider == undefined) {
            //install coinbase
            console.log("install coinbase wallet");
            let $link = $('<a class="atagclass" href="https://www.coinbase.com/" target="_blank">here</a>')
            add_warning("It looks like you don't have Coinbase, you can install it " + $link.get(0).outerHTML, 37)
            return;
        }
    } else {
        if (window.ethereum.isCoinbaseWallet) {
            provider = window.ethereum
        } else {
            console.log("install coinbase wallet")
            let $link = $('<a class="atagclass" href="https://www.coinbase.com/" target="_blank">here</a>')
            add_warning("It looks like you don't have Coinbase, you can install it " + $link.get(0).outerHTML, 37)
            return;
        }
    }

    try {
        await provider.request({method: 'eth_requestAccounts'});
    } catch (e) {
        if (e.code == 4001) {
            console.log("you canceled login")
            add_warning("You canceled the login", 18)

        }
        console.log(e)
        provider = undefined
        return
    }

    await enableWeb3(provider);

    console.log("You have successfully logged in")
    add_success("You have successfully logged in", 25)

}
