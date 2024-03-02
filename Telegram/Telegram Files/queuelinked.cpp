#include <iostream>
#include <conio.h>
using namespace std;
struct queNode
{
int item;
queNode *next;
};
queNode *start=NULL;
int main()
{
queNode *temp,*temp2;
int ch;
do {
	cout<<"Please press... \n";
	cout<<" 1 to enqueue: \n";
	cout<<" 2 to dequeue: \n";
	cout<<" 3 to display: \n";
	cout<<" 4 to quit: \n";
	cin>>ch;
	switch(ch)
	{
	case 1: //Enqueue at the end.
	temp=new queNode;
	cout<<"Enter item to enqueue. \n";
	cin>>temp->item;
	temp->next=NULL;
	if (start==NULL)
        {
	start=temp;
        cout<<temp->item<<" is enqueued\n";
        }
	else
	{
	temp2=start;
	while(temp2->next!=NULL)
	{
	temp2=temp2->next;
	}
	temp2->next=temp;
	cout<<temp->item<<" is Enqueued \n";
	}
	break;
	case 2: //Dequeue at the beginning.
	if (start==NULL)
	cout<<"Queue Empty! \n";
	else
	{
	temp=start;
	start=start->next;
	int a=temp->item;
	delete temp;
	cout<<a<<"Dequeued \n";
	}
	break;
	case 3://Show the content  of the queue.
	if (start==NULL)
	cout<<"Queue empty \n";
	else
	{
	temp2=start;
	while(temp2!=NULL)
	{
	cout<<temp2->item<<" ";
	temp2=temp2->next;
	}
	}
	break;
	case 4:
	break;
	}
	}while (ch!=4);
	getch();
}
