---
id: CommunicatingAmongModules
title: Communicating Among Modules
sidebar_label: Communicating Among Modules
---

# How to communicate among different app modules

To get the context of the section, please refer [this section](https://samagra-development.github.io/docs/docs/GettingStarted#event-configuring).


<div style="width:500px;max-width:100%;"><div style="height:0;padding-bottom:40%;position:relative;"><iframe width="500" height="200" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/3wxi92"></iframe></div><p><a href="https://imgflip.com/gif/3wxi92">via Imgflip</a></p></div>


## Usage tips
We recommend obtaining a single instance of bus through injection or another appropriate mechanism. Alternatively, you may get a singleton like the following:
```
Bus bus = BusProvider.getInstance();
```

Or You could provide a getter at your application level class to get the instance of the RxBus. (like we have used).


By default, the Bus enforces that all interactions occur on the main thread. To subscribe to an event, you can declare and annotate a method with @Subscribe. 

For any activity to receive the event triggered, this class would have to add a code as follows:

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

Please refer to the RxBus and EventObject class of the commons module for more clarity on the same. Please note that the further sections will discuss the different modules developed for the application.
