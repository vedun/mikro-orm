"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6911],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Frequently Asked Questions"},s=void 0,p={unversionedId:"faq",id:"version-5.1/faq",title:"Frequently Asked Questions",description:"How can I synchronize my database schema with the entities?",source:"@site/versioned_docs/version-5.1/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/5.1/faq",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.1/faq.md",tags:[],version:"5.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1658864842,formattedLastUpdatedAt:"Jul 26, 2022",frontMatter:{title:"Frequently Asked Questions"}},c={},u=[{value:"How can I synchronize my database schema with the entities?",id:"how-can-i-synchronize-my-database-schema-with-the-entities",level:3},{value:"I cannot run the CLI",id:"i-cannot-run-the-cli",level:3},{value:"EntityManager does not have <code>createQueryBuilder()</code> method",id:"entitymanager-does-not-have-createquerybuilder-method",level:3},{value:"How can I add columns to pivot table (M:N relation)",id:"how-can-i-add-columns-to-pivot-table-mn-relation",level:3},{value:"You cannot call <code>em.flush()</code> from inside lifecycle hook handlers",id:"you-cannot-call-emflush-from-inside-lifecycle-hook-handlers",level:3},{value:"Column is being created with JSON type while the TS type is <code>string/Date/number/...</code>",id:"column-is-being-created-with-json-type-while-the-ts-type-is-stringdatenumber",level:3},{value:"How to set foreign key by raw id?",id:"how-to-set-foreign-key-by-raw-id",level:3},{value:"New entity instances get initialized with all properties set to <code>undefined</code>",id:"new-entity-instances-get-initialized-with-all-properties-set-to-undefined",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-can-i-synchronize-my-database-schema-with-the-entities"},"How can I synchronize my database schema with the entities?"),(0,o.kt)("p",null,"There are two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1/schema-generator"},"Schema Generator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1/migrations"},"Migrations"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm schema:update --run\n")),(0,o.kt)("h3",{id:"i-cannot-run-the-cli"},"I cannot run the CLI"),(0,o.kt)("p",null,"Make sure you install ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally. If you want to have\nglobal installation, you will need to install driver packages globally too."),(0,o.kt)("h3",{id:"entitymanager-does-not-have-createquerybuilder-method"},"EntityManager does not have ",(0,o.kt)("inlineCode",{parentName:"h3"},"createQueryBuilder()")," method"),(0,o.kt)("p",null,"The method is there, the issue is in the TS type."),(0,o.kt)("p",null,"In v4 the ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," package, where ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityRepository")," are\ndefined, is not dependent on knex, and therefore it cannot have a method\nreturning a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),". You need to import the SQL flavour of the EM\nfrom the driver package to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The SQL flavour of EM is actually called ",(0,o.kt)("inlineCode",{parentName:"p"},"SqlEntityManager"),", it is exported both under\nthis name and under ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager } from '@mikro-orm/mysql'; // or any other SQL driver package\n\nconst em = orm.em as EntityManager;\nconst qb = await em.createQueryBuilder(...);\n")),(0,o.kt)("p",null,"To have the ",(0,o.kt)("inlineCode",{parentName:"p"},"orm.em")," variable properly typed, we can use generic type parameter of\n",(0,o.kt)("inlineCode",{parentName:"p"},"MikroORM.init()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { MySqlDriver } from '@mikro-orm/mysql'; // or any other SQL driver package\n\nconst orm = await MikroORM.init<MySqlDriver>({\n  // ...\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),(0,o.kt)("p",null,"Same applies for the ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregate()")," method in mongo driver:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager } from '@mikro-orm/mongodb';\n\nconst em = orm.em as EntityManager;\nconst ret = await em.aggregate(...);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The mongo flavour of EM is actually called ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoEntityManager"),", it is exported both under\nthis name and under ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," alias, so you can just change the\nlocation from where you import.")),(0,o.kt)("h3",{id:"how-can-i-add-columns-to-pivot-table-mn-relation"},"How can I add columns to pivot table (M:N relation)"),(0,o.kt)("p",null,"You should model your M:N relation transparently, via 1:m and m:1 properties.\nMore about this can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.1/composite-keys/#use-case-3-join-table-with-metadata"},"Composite Keys section"),"."),(0,o.kt)("h3",{id:"you-cannot-call-emflush-from-inside-lifecycle-hook-handlers"},"You cannot call ",(0,o.kt)("inlineCode",{parentName:"h3"},"em.flush()")," from inside lifecycle hook handlers"),(0,o.kt)("p",null,"You might see this validation error even if you do not use hooks. If that happens,\nthe reason is usually because you do not have ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.1/identity-map"},"request context")," set up properly, and\nyou are reusing one ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance."),(0,o.kt)("h3",{id:"column-is-being-created-with-json-type-while-the-ts-type-is-stringdatenumber"},"Column is being created with JSON type while the TS type is ",(0,o.kt)("inlineCode",{parentName:"h3"},"string/Date/number/...")),(0,o.kt)("p",null,"You are probably using the default ",(0,o.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),", which does not\nsupport inferring property type when there is a property initializer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property()\nfoo = 'abc';\n")),(0,o.kt)("p",null,"There are two ways around this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.1/metadata-providers/#tsmorphmetadataprovider"},"TsMorphMetadataProvider")),(0,o.kt)("li",{parentName:"ul"},"Specify the type explicitly:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property()\nfoo: string = 'abc';\n")),(0,o.kt)("h3",{id:"how-to-set-foreign-key-by-raw-id"},"How to set foreign key by raw id?"),(0,o.kt)("p",null,"There are several ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using references:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const b = new Book();\nb.author = em.getReference(Author, 1);\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Using assign helper:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const b = new Book();\nem.assign(b, { author: 1 });\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Using create helper:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const b = em.create(Book, { author: 1 });\n")),(0,o.kt)("h3",{id:"new-entity-instances-get-initialized-with-all-properties-set-to-undefined"},"New entity instances get initialized with all properties set to ",(0,o.kt)("inlineCode",{parentName:"h3"},"undefined")),(0,o.kt)("p",null,"When creating new entity instances, either with ",(0,o.kt)("inlineCode",{parentName:"p"},"new Book()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"em.create(Book, {})"),", MikroORM should return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Book {}\n")),(0,o.kt)("p",null,"But some users might find that this returns an object with properties that are explicitly\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Book {\n  name: undefined,\n  author: undefined,\n  createdAt: undefined\n}\n")),(0,o.kt)("p",null,"This can cause unexpected behavior, particularly if you're expecting the database to set a\ndefault value for a column."),(0,o.kt)("p",null,"To fix this, disable the ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#the-usedefineforclassfields-flag-and-the-declare-property-modifier"},(0,o.kt)("inlineCode",{parentName:"a"},"useDefineForClassFields"))," option in your tsconfig:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "useDefineForClassFields": false\n  }\n}\n')))}m.isMDXComponent=!0}}]);