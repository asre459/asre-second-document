#include<iostream>
using namespace std;
#include<stdlib.h>
#include<conio.h>
struct node
{
int data;
struct node*next;
};
struct node*top=NULL,*temp;
int main()
{
int choice,data;
while(1)
{
cout<<"1.push a data\n2.pop a data\n3.display the data\n4.exit\n";
cout<<"enter your choice:\n";
cin>>choice;
switch(choice)
{
case 1:
temp=new node;
cout<<"enter anode data:\n";
cin>>data;
temp->data=data;
temp->next=top;
top=temp;
break;
case 2:
if(top!=NULL)
{
top->data;
top=top->next;
}
else
{
cout<<"stack under flow!!!!!!!!!!!"<<endl;
}
break;
case 3:
temp=top;
if(temp==NULL)
{
cout<<"stack is empty!"<<endl;
}
while(temp!=NULL)
{
cout<<"->"<<temp->data<<endl;
temp=temp->next;
}
break;
}
}
}

