---
id: CommunicatingAmongModules
title: Communicating Among Modules
sidebar_label: Communicating Among Modules
---

## 1. Overview - How to communicate among different app modules?

To get the context of the section, please refer [this section](https://samagra-development.github.io/docs/docs/GettingStarted#event-configuring).


<a href="https://imgflip.com/gif/3wxi92"><img src="https://i.imgflip.com/3wxi92.gif" title="made at imgflip.com"/></a>


## 2. Usage tips
We recommend obtaining a single instance of bus through injection or another appropriate mechanism. Alternatively, you may get a singleton like the following:
```
Bus bus = BusProvider.getInstance();
```

Or You could provide a getter at your application level class to get the instance of the RxBus. (like we have used).


By default, the Bus enforces that all interactions occur on the main thread. 

You can create RxBus like below.

```
public class RxBus {

    public RxBus() {
    }

    private PublishSubject<Object> bus = PublishSubject.create();

    public void send(Object o) {
        bus.onNext(o);
    }

    public Observable<Object> toObservable() {
        return bus;
    }

}
```

Now, we will create the Singleton(single instance) of RxBus in our application class or at any other place as below:

How to access the RxBus has been mentioned above already.


You can subscribe for an event in any class like below:

```
compositeDisposable.add(this.getEventBus()

.toObservable().subscribeOn(Schedulers.io())

.observeOn(AndroidSchedulers.mainThread())

.subscribe(exchangeObject -> {

if (exchangeObject instanceof ExchangeObject) {

if (((ExchangeObject) exchangeObject).to == Modules.MAIN_APP

&& ((ExchangeObject) exchangeObject).from == Modules.ANCILLARY_SCREENS

&& ((ExchangeObject) exchangeObject).type == ExchangeObject.ExchangeObjectTypes.SIGNAL) {

ExchangeObject.SignalExchangeObject signalExchangeObject = (ExchangeObject.SignalExchangeObject) exchangeObject;

if (signalExchangeObject.shouldStartAsNewTask ){

if(currentActivity != null){

CommonUtilities.startActivityAsNewTask(signalExchangeObject.intentToLaunch, currentActivity);

}}

else

startActivity(signalExchangeObject.intentToLaunch);

} else if (exchangeObject instanceof ExchangeObject.EventExchangeObject) {  ExchangeObject.EventExchangeObject eventExchangeObject = (ExchangeObject.EventExchangeObject) exchangeObject;

Timber.d("Event Received %s ", eventExchangeObject.customEvents);

if (eventExchangeObject.to == Modules.MAIN_APP || eventExchangeObject.to == Modules.PROJECT) {

Timber.d("Event Received %s ", eventExchangeObject.customEvents);

}

} else if(exchangeObject instanceof ExchangeObject.NotificationExchangeObject){

PendingIntent pendingIntent = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getIntent();

int notificationID = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getNotificationID();

int title = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getTitle();

String body = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getBody();

Timber.d("Event Received for Push Notification %s ", title);

}else {

Timber.d("Received but not intended");

}

}

}, Timber::e));

```


You can send an event from any other class or from the same class like below:

```
MyApplication.getInstance().component().rxBus().send(new EventTypeExhangeObject());
        
```

This way, you have the EventBus pattern with RxJava, RxBus. But if there is some error, it will terminate, so to avoid that check [RxRelay](https://github.com/JakeWharton/RxRelay).

RxRelay: A Subject except without the ability to call onComplete or onError.
