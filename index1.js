$(function() {
    // Get handle to the chat div 
    var $chatWindow = $('#name');

    // Manages the state of our access token we got from the server
    var accessManager;

    // Our interface to the IP Messaging service
    var messagingClient;

    // A handle to the "general" chat channel - the one and only channel we
    // will have in this sample app
    var generalChannel;

    // The server will assign the client a random username - store that value
    // here
    var username;

    // Helper function to print info messages to the chat window


 

    // Alert the user they have been assigned a random username

    // Get an access token for the current user, passing a username (identity)
    // and a device ID - for browser-based apps, we'll always just use the 
    // value "browser"
    $.getJSON('/token.php', {
        username: 'server',
        device: 'server'
    }, function(data) {
        // Alert the user they have been assigned a random username
        username = data.identity;
      
        accessManager = new Twilio.AccessManager(data.token);
        messagingClient = new Twilio.IPMessaging.Client(accessManager);

        // Get the general chat channel, which is where all the messages are
        // sent in this simple application
        var promise = messagingClient.getChannelByUniqueName($chatWindow.val());
        promise.then(function(channel) {
            generalChannel = channel;
            if (!generalChannel) {
                // If it doesn't exist, let's create it
                messagingClient.createChannel({
                    uniqueName: $chatWindow.val(),
                    friendlyName: 'General Chat Channel'
                }).then(function(channel) {
                    console.log('Created general channel:');
                    console.log(channel);
                    generalChannel = channel;
                   // setupChannel();
                });
            } else {
                console.log('Found general channel:');
                console.log(generalChannel);
           //     setupChannel();
            }
        });
    });

    // Set up channel after it has been found
    function setupChannel() {
        // Join the general channel
        generalChannel.join().then(function(channel) {
         
        });

        // Listen for new messages sent to the channel
        generalChannel.on('messageAdded', function(message) {
            printMessage(message.author, message.body);
        });
    }

    // Send a new message to the general channel
    var $input = $('#chat-input');
    $input.on('keydown', function(e) {
        if (e.keyCode == 13) {
            generalChannel.sendMessage($input.val())
            $input.val('');
        }
    });
});