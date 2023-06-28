// 문제 1번
{
    let nums = [100,200,300,400,500]
    nums.pop();
    nums.pop();
    console.log(nums); //[ 100, 200, 300 ]
}

// 문제 2번
{
    let arr = [200,100,300];
    arr.splice(2,0,1000);
    console.log(arr)  //[ 200, 100, 1000, 300 ]
}

// 문제 3번
{
    let arr = [100,200,300];
    console.log(typeof(arr))
}   //object

// 문제 4번 => 2번


// 문제 5번
console.clear()
{
    let a = 10;
    let b = 2;

    for(let i=1; i<5; i+=2){
        a+=i;
    }
    console.log(a+b)  //16
}

// 문제 6번
// 2번 1

// 문제 7번
// 2번 2

// 문제 8번
{
    let d ={
        'height':180,
        'weight':78,
        'weight':84,
        'temperature':36,
        'eyesight':1
    }
    console.log(d['weight'])  //84
}

//문제 9번
{
    let year = '2019';
    let month = '04';
    let day = '26';
    let hour = '11';
    let minute = '34';
    let second = '27';

    
}