if(!self.define){let e,r={};const i=(i,c)=>(i=new URL(i+".js",c).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(r[a])return;let n={};const d=e=>i(e,a),o={module:{uri:a},exports:n,require:d};r[a]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"coverage/nav/base.css",revision:"899ea8483c28270ca7835460bdd4da33"},{url:"coverage/nav/block-navigation.js",revision:"e3e16775ec854aa3ef7fadd09056943c"},{url:"coverage/nav/components/ImageOption.js.html",revision:"50e82893ffb93faf606e9b730d40749c"},{url:"coverage/nav/components/index.html",revision:"e3b8a522c43ace54e005e52f1da8d2b2"},{url:"coverage/nav/components/InputField.js.html",revision:"4b65657f77ee5e67ca5910db54e3c419"},{url:"coverage/nav/components/MainButton.js.html",revision:"ab16ccb54e03e88570b336ebbb6d3bd9"},{url:"coverage/nav/index.html",revision:"27497af8a898c11ac36f9b1768a9918a"},{url:"coverage/nav/model/base/BasePlayer.js.html",revision:"b24ebb5f84bbda52eb8cefd09cd727bd"},{url:"coverage/nav/model/base/index.html",revision:"c6cc94e4979feba03e1882fda03d5acd"},{url:"coverage/nav/model/Game.js.html",revision:"a468453923241a04b7661129a147eb65"},{url:"coverage/nav/model/index.html",revision:"db7ef9f9ec8f3f3e03d9abcbd74cdbff"},{url:"coverage/nav/model/Machine.js.html",revision:"de10c451228085ca289b8a82400efbf0"},{url:"coverage/nav/model/User.js.html",revision:"d6712198fa89a3a12c2e1d34f81646e1"},{url:"coverage/nav/prettify.css",revision:"31f0c9da5ac09f2563cab46ebc6e445a"},{url:"coverage/nav/prettify.js",revision:"6051903a2f7363ee232a01bd32f60b6a"},{url:"coverage/nav/sorter.js",revision:"24cab317b3dc4f1852a276d6152ac6fe"},{url:"coverage/nav/util/Builder.js.html",revision:"3b02f28b327570f88b61f2a417a5798d"},{url:"coverage/nav/util/Constants.js.html",revision:"ea485207cd15e7ebcd1bde0f05484510"},{url:"coverage/nav/util/EventFirer.js.html",revision:"b0316dccbc5bce29c5d20da57b3f2002"},{url:"coverage/nav/util/index.html",revision:"2aefdcc068164d804870848222d284ba"},{url:"coverage/nav/util/Persistence.js.html",revision:"9b80deb4a370333588beae99bcf9dbab"},{url:"coverage/nav/view/EnvironmentView.js.html",revision:"db62469bb26b6794be521ce2e5fa6b2c"},{url:"coverage/nav/view/GameView.js.html",revision:"e406cd72477ef2e2499fdcdc7e0738c3"},{url:"coverage/nav/view/HomeView.js.html",revision:"7581acf91d938bfb88fe5715398dc2e8"},{url:"coverage/nav/view/index.html",revision:"25b681579c53c2c03670ae9eb06018c6"},{url:"ed23579d.js",revision:"a2e1ef691a6896c0fd674756bab6db26"},{url:"index.html",revision:"021e9fceb37126135cb20aed29671cf1"},{url:"index.js",revision:"c92370cb2638e6531957296733db585d"},{url:"public/bundle.js",revision:"491f94b1fb326cd928b02f9d6f024da0"},{url:"rollup.config.js",revision:"186588e7573d83f314c0fbab035493eb"},{url:"src/components/ImageOption.js",revision:"6e1139784247cdd72c9c3f9ec31b338e"},{url:"src/components/InputField.js",revision:"132d095cb8df1d9bf5b21f7ca0277b87"},{url:"src/components/MainButton.js",revision:"fd4a39da95ade0befc790c48f16603d9"},{url:"src/model/base/BasePlayer.js",revision:"ba2e51cfcdd1b506353bc95b2c6eea23"},{url:"src/model/Game.js",revision:"d27c3ece30a89726770643285b6df604"},{url:"src/model/Machine.js",revision:"5fb7653de79258d9236e51e51bbcecd6"},{url:"src/model/User.js",revision:"c57807e9e2610ed108660c098f27d79e"},{url:"src/util/Builder.js",revision:"89ce8615c7f81144e8a255770266ce0c"},{url:"src/util/Constants.js",revision:"d692e540b29f6cf86a089156e9632078"},{url:"src/util/EventFirer.js",revision:"b61d6fc131d0e26928427a91549715ff"},{url:"src/util/Persistence.js",revision:"0bba33905cd28983e0e4cd942b41220d"},{url:"src/view/EnvironmentView.js",revision:"96567e3441c39162ead37142494b9f79"},{url:"src/view/GameView.js",revision:"3328728705980fd63f4afe0c82ded4c3"},{url:"src/view/HomeView.js",revision:"f4687de75fe4ee71228bea8687d599ff"},{url:"test/src/model/base/BasePlayer.test.js",revision:"65c15d8e59a526ceb4b2ae705d8aa9be"},{url:"test/src/model/Game.test.js",revision:"f957d54f72e56e8216ded60db14703a1"},{url:"test/src/model/User.test.js",revision:"6afd0f5c33d5ab2ed7bc83ee99f8f40a"},{url:"test/src/util/Persistence.test.js",revision:"31f3aaf8ccf289b5b4c6f5cecb3aeb92"},{url:"test/src/view/EnvironmentView.test.js",revision:"87ad96c6af3d3682b7e908bb2e63d4fb"},{url:"test/src/view/GameView.test.js",revision:"14e8420ab5f761ce87ec11595c7919a9"},{url:"test/src/view/HomeView.test.js",revision:"f943d6ca666e56bce0f24efb710df311"},{url:"web-dev-server.config.js",revision:"e8c7bd8de2e39d7e55f820741249771c"},{url:"web-test-runner.config.js",revision:"6472a0498be7145d8d188b350e4eddcb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
