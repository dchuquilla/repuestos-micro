# Use an official Ruby image as the base
FROM ruby:3.2

# Install essential packages and Node.js for Rails assets
RUN apt-get update -qq && apt-get install -y nodejs

# Set the working directory
WORKDIR /app

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install gems
RUN bundle install

# Copy the rest of the codebase
COPY . .

# Remove the server.pid file if it exists
RUN rm -f /app/tmp/pids/server.pid

# Expose port for Rails server
EXPOSE 3000

# Start the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]
