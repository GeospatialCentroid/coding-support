module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, node, context)
        # In this version of the gem, 'context' is the site object itself.
        # We access configuration directly via .config
        base = context.config['baseurl'] || ''

        # Prepend the baseurl if the URL exists and doesn't already have it
        if record[:url] && !record[:url].start_with?(base)
          # Ensure we don't end up with // if baseurl is empty or /
          record[:url] = File.join(base, record[:url])
        end

        # Safety: Clean up any accidental double slashes
        record[:url] = record[:url].gsub('//', '/')
        
        record
      end
    end
  end
end