var targetIndices = function(nums, target) {
    let indeces = [];
    nums.sort((a,b)=> a -b);
    for(let i=0; i<nums.length;i++){
        if(nums[i]== target){
            indeces.push(i);
        }
    }
    return indeces;
};