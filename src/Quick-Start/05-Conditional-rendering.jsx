/* In React, you'll use the regular JavaScript code */

let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);

/* Use conditional ? operator */
return (
    <div>
        {isLoggedIn ? (
            <AdminPanel />
         ) : (
         <LoginForm />
         )}
    </div>
)