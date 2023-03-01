
// const dynamicLod = dynamic(() => import("../components/dynamicHeader"));
import sortBy from "lodash/sortBy";
// import moment from "moment";

export function useLodash(){
    // const arr = sortBy([{id: 1, name : "Abds"}, {id: 2, name : "Rafik"}, {id: 3, name : "Amine"}], function(o) { return o.user; });
    const arr = [{id: 1, name : "Abds"}, {id: 2, name : "Rafik"}, {id: 3, name : "Amine"}];
    return sortBy(arr, ({name}) => name);
}

// export function useMoment(){
//     return moment().format("LL")
// }