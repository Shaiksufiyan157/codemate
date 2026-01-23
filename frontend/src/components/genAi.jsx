import axios from "axios";
import { useEffect } from "react";



const CodemateAi= ()=>{
useEffect(()=>{
    const fetchdata=async()=>{
       const url=  `${import.meta.env.VITE_BACKEND_URL}/ai`
       const rawCode=`class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* temp=head;
    ListNode* prev=nullptr;
    int count=0;
    if(head->next==NULL){
        return NULL;
    }
    while(temp){
        count++;
        temp=temp->next;
    }
    if(count==n){
        return head->next;
    }
    temp=head;
    while(temp){
        if(count--==n){
            prev->next=prev->next->next;
            delete temp;
            break;
        }
        prev=temp;
        temp=temp->next;
    }
    return head;
    }
};`
        
       const userContext = "https://leetcode.com/problems/remove-nth-node-from-end-of-list/";
       const payload = {
    userCode: rawCode,
    userContext: userContext
};
      
     
       const data=await axios.post(url,payload)
       console.log(data)
    }
    fetchdata()
})
    // const data=axios.post()
    return <>
    <h1>hello codemate ai</h1>
    </>
}

export default CodemateAi;