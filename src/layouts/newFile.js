import { ref, onMounted } from "vue";
import axios from "axios";

export default (await import('vue')).defineComponent({
components: { imgBig, sideBar, loadingSpinner, pageSize },
setup() {
const imgLinks = ref([]);
const hardLink = ref("https://i.waifu.pics/aY~~qQE.png");
const softLink = ref("https://i.waifu.pics/TCe98X_.jpg");
const imgClicked = ref(null);
const blurStatus = ref("");
const selectedCategory = ref("");
const selectedType = ref("sfw");
const loadingStatus = ref(false);
const numberOfPictures = ref(18);
const apiChoice = ref(1);
const api1Links = [
"waifu",
"neko",
"shinobu",
"megumin",
"bully",
"cuddle",
"bonk",
"yeet",
"highfive",
];
const api2Links = [
"waifu",
"uniform",
"maid",
"marin-kitagawa",
"mori-calliope",
"raiden-shogun",
"selfies",
"oppai",
];
const currentApiLinks = ref(api1Links);

onMounted(() => {
imgLinks.value = [
"https://i.waifu.pics/n6U5SHh.png",
"https://i.waifu.pics/V8hvqfK.jpg",
"https://i.waifu.pics/-eOx7uI.jpg",
"https://i.waifu.pics/_laUTLb.jpg",
"https://i.waifu.pics/bzgUs3j.jpg",
"https://i.waifu.pics/mUTwf4z.jpg",
"https://i.waifu.pics/sS-rREz.jpg",
"https://i.waifu.pics/i1QE8~W.com_0265.jpg",
"https://i.waifu.pics/e6r~srS.png",
"https://i.waifu.pics/dPXxQqE.png",
"https://i.waifu.pics/hFkV1Ny.jpg",
"https://i.waifu.pics/u~qTv5c.jpg",
"https://i.waifu.pics/ryft10A.jpg",
"https://i.waifu.pics/i~RQhRD.png",
"https://i.waifu.pics/bMH6oaI.png",
"https://i.waifu.pics/lAI_XX6.jpg",
"https://i.waifu.pics/MjtH3Ha.jpg",
"https://i.waifu.pics/WGTA1vN.png",
];
// console.log(imgLinks.value);
});

const loadImgs = (category) => {
loadingStatus.value = true;
let imgLinksTemp = [];
imgLinks.value = [];
for (let i = 0; i < numberOfPictures.value; i++) {
if (apiChoice.value == 1) {
axios
.get(`https://api.waifu.pics/${selectedType.value}/${category}`)
.then((response) => {
imgLinksTemp.push(response.data.url);
imgLinks.value.push(response.data.url);
console.log("2");
if (i === numberOfPictures.value - 1) {
imgLinks.value = imgLinksTemp;
console.log(imgLinks.value);
// imgLinksTemp = [];
// loadingStatus.value = false;
}
});
} else {
axios
.get(`https://api.waifu.im/random`, { selected_tags: category })
.then((response) => {
console.log(response.data.images[0].url);

imgLinks.value.push(response.data.images[0].url);
});
}
}
};

const changeApi = () => {
if (apiChoice.value !== 1) {
apiChoice.value = 2;
currentApiLinks.value = api2Links;
} else {
apiChoice.value = 1;
currentApiLinks.value = api1Links;
}

console.log("change in api");
};

const newPageSize = (newSize) => {
numberOfPictures.value = newSize;
};
let loadingCounter = 0;
const loadingHandler = () => {
loadingCounter++;
// console.log(loadingCounter);
if (loadingCounter === numberOfPictures.value) {
console.log("object");
loadingStatus.value = false;
loadingCounter = 0;
}
};

const setCategory = (category) => {
selectedCategory.value = category;
loadImgs(category);
};

const thumbClicked = (id) => {
imgClicked.value = id;
// console.log(imgClicked.value);
blurStatus.value = "blur";
};

const thumbClose = () => {
blurStatus.value = "";
imgClicked.value = null;
};

return {
thumbClicked,
thumbClose,
setCategory,
loadImgs,
loadingHandler,
newPageSize,
changeApi,
loadingStatus,
hardLink,
softLink,
imgLinks,
imgClicked,
blurStatus,
selectedType,
apiChoice,
currentApiLinks,
};
},
});
