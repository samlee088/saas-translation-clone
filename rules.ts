rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /customers/{uid} {
      allow read: if request.auth.uid == uid;

      match /checkout_sessions/{id} {
        allow read, write: if request.auth.uid == uid;
      }
      match /subscriptions/{id} {
        allow read: if request.auth.uid == uid;
      }
      match /payments/{id} {
        allow read: if request.auth.uid == uid;
      }
    }

    match /products/{id} {
      allow read: if true;

      match /prices/{id} {
        allow read: if true;
      }

      match /tax_rates/{id} {
        allow read: if true;
      }
    }
    
    function isMemberOfChat(chatId) {
    	return exists(/databases/$(database)/documents/chats/$(chatId)/members/$(request.auth.uid));
    }
    
    //Collection groups require special access
    // https://stackoverflow.com/questions/56313459/collection-group-permissions-for-firestore
    match /{path=**}/members/{memberId} {
    	allow read, write: if true;
    }
    
    match /chats {
    	allow read, write: if true;
    }
    match /chats/{chatId} {
    	//the Chat Document
      allow read, write: if true;
      
        match /members {
        allow read, write;
        }
        
        match /members/{userId} {
            allow read, write;
        }
        
        match /message/{messageId} {
            allow read;
            allow write: if isMemberOfChat(chatId);
        }
      
    }
  }
}