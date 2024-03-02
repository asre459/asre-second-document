#include<iostream>
using namespace std;
#include<conio.h>
int main()
{
int top=-1;
int ch;
int q[5];
do
{
cout<<"\n1) push\n";
cout<<"2) pop\n";
cout<<"3) display\n";
cout<<"4) exit\n";
cout<<"Enter your choice :";
cin>>ch;
switch(ch)
{
case 1:
if(top==4)
{
cout<<"The stack is full\n";
}
else
{
top+=1;
cout<<"Enter new item\n";
cin>>q[top];
cout<<q[top]<<" is pushed\n";
}
break;
case 2:
if(top==-1)
{
cout<<"The stack is empty\n";
}
else
{

cout<<q[top]<<" is poped\n";
top-=1;
cout<<q[top];
}
break;
case 3:
if(top==-1)
{
cout<<"No item in the stack\n";
}
else

{
int i=top;
while(i>=0)
{
cout<<q[i]<<endl;
i--;
}
}
break;
}
}
while(ch!=4);

}
