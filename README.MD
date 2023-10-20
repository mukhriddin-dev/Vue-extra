## **Vue.js**

##### lesson - 1 

- Lifec cycle methods:

 1. setup -> install 
 2. onBeforMounted 
 3. onMounted
 4. onBeforeUpdate
 5. onUpdated
 5. onBeforeUnMouted
 6. onUnMounted

 - State managment

 1. ref      -> :primative 
 2. reactive -> : non primative

 - Expression template

 ``` 
 <h1>{{ number }}</h1>

 <Box attr_name="attr_value"/> 
 // static props


 <Box :attr_name="attr_value"/>
// dynamic props


```
- Events 

1. click 
2. change
3. keydown

``` 
import {ref} from "vue";

const number=ref(0);
<h1>{{number}}</h1>

<button @clcik="()=>number++">INCR</button>

```

- Directives

1. v-on:keydown -> @ -> 
2. v-show -> elementni display:none
3. v-if   -> elementni comment
4. v-else -> v-if ni aks holati
5. v-else-if yana shart
6. v-slot 
7. v-bind -> attributni dynamic qilish
8. v-html
9. v-once
10. v-for -> render list 
11. v-model


....


- Props


defineProps({}) or defineProps(['prop_name'])

```

import { defineProps } from "vue";


const props = defineProps({
  data: {
    type: number,
    required: true
  },
  txt: {
    type: String,
    required: false
  }
});

/// send props other components

const data=ref([1,2,3,4,5,6,7]);

<PostItem v-for="(el,index,arr) in data" :data="el" txt="Vue.app"/>

```


#### lesson-2

1.  Attribute binding /

- ref attribute
- v-bind
- v-model
- vue forms

```

/// 1. ref attribute select -> 
/// 2. :value="text" -> @keyup="e=>text.value=e.target.value"
/// 3. @keyup="e=>getTex(e)" , getText(e){text.value=e.target.value}
/// 4. <input v-model="text" type="text"/>

```

2. slot -> react in children /
3. emits  /
4. reusabele components  
5. vue-router latest /
6. Guards ->  














