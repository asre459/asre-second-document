#include <iostream>
#include <conio.h>
using namespace std;
int main()
{
int item, q[10], ch, rear=-1, front=-1;
do
{
cout<<"\n Please enter.. . \n";
cout<<"    1 to Enque: \n";
cout<<"    2 to Deque: \n";
cout<<"    3 to Display: \n";
cout<<"    4 to Quit: \n";
cin>>ch;
switch(ch)
{
case 1: //Enque
if (rear==9)
  {
    cout<<"Queue overflow! \n";
  }
else
  {
    rear=rear+1;
    cout<<"Enter item: \n";
    cin>>item;
    q[rear]=item;
    cout<<item<<" is enqued! \n";
       if (front==-1)
          front=front+1;
}
break;
case 2: //Deque
if (rear==-1 || front>rear)
    cout<<"Queue Empty! \n";
else
  {
    int a=q[front];
    front=front+1;
    cout<<a<<" is dequed! \n";
  }
break;
case 3: //Show
if (rear==-1 || front>rear)
   cout<<"Queue Empty! \n";
else
   {
     for (int i=front;i<=rear;i++)
       cout<<q[i]<<" ";
   }
break;
case 4: //Quit
break;
}
}
while (ch!=4);
getch();
}














